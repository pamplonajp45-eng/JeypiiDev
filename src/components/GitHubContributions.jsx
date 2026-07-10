import { useEffect, useState, useCallback } from "react";
import "./GitHubContributions.css";

const GITHUB_USERNAME = "pamplonajp45-eng";

// Helper to generate cache-busted fallback image URL
const getFallbackImageUrl = () =>
  `https://ghchart.rshah.org/3fb950/${GITHUB_USERNAME}?t=${Date.now()}`;

const GREEN_SCALE = [
  { level: 0, color: "#161b22", label: "No contributions" },
  { level: 1, color: "#0e4429", label: "1–3 contributions" },
  { level: 2, color: "#006d32", label: "4–7 contributions" },
  { level: 3, color: "#26a641", label: "8–15 contributions" },
  { level: 4, color: "#39d353", label: "16+ contributions" },
];

function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 15) return 3;
  return 4;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function addCacheBuster(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}_=${Date.now()}`;
}

async function fetchYearContributions(year) {
  const res = await fetch(
    addCacheBuster(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
    ),
  );
  if (!res.ok) throw new Error("API not available");
  return res.json();
}

export default function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [tooltip, setTooltip] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fallbackImageUrl, setFallbackImageUrl] = useState(
    getFallbackImageUrl(),
  );

  // Fetch all available years on mount
  useEffect(() => {
    async function fetchAllYears() {
      try {
        // Fetch last year to discover years range
        const data = await fetchYearContributions("last");
        const contribs = data.contributions || [];

        // Extract unique years
        const years = new Set();
        contribs.forEach((c) => {
          if (c.date) years.add(new Date(c.date).getFullYear());
        });

        // Also fetch the current year to be sure we have it
        if (!years.has(currentYear)) {
          try {
            const currentData = await fetchYearContributions(currentYear);
            currentData.contributions?.forEach((c) => {
              if (c.date) years.add(new Date(c.date).getFullYear());
            });
          } catch {
            // ignore
          }
        }

        const sortedYears = Array.from(years).sort((a, b) => b - a);
        setAvailableYears(sortedYears);

        // Fetch data for the latest year
        if (sortedYears.length > 0) {
          setSelectedYear(sortedYears[0]);
          await loadYear(sortedYears[0]);
        } else {
          setLoading(false);
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    }

    fetchAllYears();
  }, []);

  // Refresh fallback image URL on mount to bust cache
  useEffect(() => {
    setFallbackImageUrl(getFallbackImageUrl());
  }, []);

  const processContribs = useCallback((contribs) => {
    const total = contribs.reduce((sum, c) => sum + (c.count || 0), 0);
    setTotalContributions(total);

    const weeksArr = [];
    let currentWeek = [];

    contribs.sort((a, b) => new Date(a.date) - new Date(b.date));

    contribs.forEach((entry) => {
      const day = new Date(entry.date).getDay();
      if (day === 0 && currentWeek.length > 0) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(entry);
    });
    if (currentWeek.length > 0) weeksArr.push(currentWeek);

    if (weeksArr.length > 0) {
      const firstWeek = weeksArr[0];
      const firstDay = new Date(firstWeek[0]?.date).getDay();
      for (let i = 0; i < firstDay; i++) {
        firstWeek.unshift(null);
      }
    }

    setWeeks(weeksArr);
  }, []);

  const loadYear = useCallback(
    async (year) => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchYearContributions(year);
        processContribs(data.contributions || []);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    },
    [processContribs],
  );

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value, 10);
    setSelectedYear(year);
    loadYear(year);
    setTooltip(null);
  };

  return (
    <section className="github-section">
      <div className="github-container">
        <div className="github-header">
          <h2 className="github-title">CONTRIBUTION ACTIVITY</h2>
          {!loading && !error && availableYears.length > 0 && (
            <div className="github-year-selector">
              <label htmlFor="year-select" className="github-year-label">
                Year:
              </label>
              <select
                id="year-select"
                className="github-year-dropdown"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          )}
          <p className="github-subtitle">
            {loading
              ? "Loading contribution data..."
              : error
                ? "Contribution calendar"
                : `${totalContributions.toLocaleString()} contributions in ${selectedYear}`}
          </p>
        </div>

        {error ? (
          <div className="github-graph-wrapper github-graph-wrapper--big">
            <div className="github-graph-header">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <span>Contribution Calendar</span>
            </div>
            <div className="github-graph-body">
              <img
                src={fallbackImageUrl}
                alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
                className="github-contribution-graph"
                loading="lazy"
              />
            </div>
          </div>
        ) : loading ? (
          <div className="github-loading">
            <div className="github-loading-pulse" />
          </div>
        ) : (
          <div className="github-graph-wrapper github-graph-wrapper--big">
            <div className="github-graph-header">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <span>Contribution Calendar — {selectedYear}</span>
            </div>
            <div className="github-graph-body">
              {weeks.length === 0 ? (
                <div className="github-empty-year">
                  <p>No contributions found for {selectedYear}.</p>
                </div>
              ) : (
                <>
                  <div className="github-weeks-row">
                    {weeks.map((week, colIndex) => (
                      <div key={colIndex} className="github-week">
                        {week.map((day, rowIndex) => {
                          if (!day) {
                            return (
                              <div
                                key={rowIndex}
                                className="github-cell github-cell--empty"
                              />
                            );
                          }
                          const level = getLevel(day.count || 0);
                          const color = GREEN_SCALE[level].color;
                          return (
                            <div
                              key={rowIndex}
                              className="github-cell"
                              style={{ backgroundColor: color }}
                              onMouseEnter={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setTooltip({
                                  x: rect.left + rect.width / 2,
                                  y: rect.top - 8,
                                  count: day.count || 0,
                                  date: day.date,
                                });
                              }}
                              onMouseLeave={() => setTooltip(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  <div className="github-legend">
                    <span className="github-legend-label">Less</span>
                    {GREEN_SCALE.map((s) => (
                      <span
                        key={s.level}
                        className="github-legend-swatch"
                        style={{ backgroundColor: s.color }}
                        title={s.label}
                      />
                    ))}
                    <span className="github-legend-label">More</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {tooltip && (
          <div
            className="github-tooltip"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <span className="github-tooltip-count">
              {tooltip.count.toLocaleString()} contribution
              {tooltip.count !== 1 ? "s" : ""}
            </span>
            <span className="github-tooltip-date">
              {formatDate(tooltip.date)}
            </span>
          </div>
        )}

        <div className="github-profile-link">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
