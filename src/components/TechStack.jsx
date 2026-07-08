import React, { useState, useMemo } from "react";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaNpm,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";
import "./TechStack.css";

/* =========================================================
   DATA — reusable objects for categories & technologies
   ========================================================= */

const CATEGORIES = [
  { id: "languages", label: "Languages", icon: "📜" },
  { id: "frontend", label: "Frontend", icon: "🖼️" },
  { id: "backend", label: "Backend & Database", icon: "🗃️" },
  { id: "cloud", label: "Cloud & DevOps", icon: "☁️" },
  { id: "ai", label: "AI Tools", icon: "🔮" },
];

const SLOTS_PER_CATEGORY = 20;

const TECHS = {
  languages: [
    {
      id: "html5",
      name: "HTML5",
      icon: <StackIcon name="html5" />,
      rarity: "legendary",
      description:
        "The bedrock rune etched into every project — the skeleton every other spell is cast upon.",
      experience: "2 Years",
      mastery: 5,
      projects: "30+",
    },
    {
      id: "css3",
      name: "CSS3",
      icon: <StackIcon name="css3" />,
      rarity: "epic",
      description:
        "A styling enchantment that clothes the raw bones of HTML in visual splendor.",
      experience: "2 Years",
      mastery: 5,
      projects: "30+",
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: <StackIcon name="javascript" />,
      rarity: "legendary",
      description:
        "The arcane force animating the web — summoning logic and behavior out of nothing.",
      experience: "1 Year",
      mastery: 5,
      projects: "25+",
    },
    {
      id: "php",
      name: "PHP",
      icon: <StackIcon name="php" />,
      rarity: "rare",
      description:
        "An older tongue of server sorcery, still potent when properly wielded.",
      experience: "2+ Years",
      mastery: 3,
      projects: "8+",
    },
    {
      id: "sql",
      name: "SQL",
      icon: <StackIcon name="sql" />,
      rarity: "uncommon",
      description:
        "The query-tongue for commanding data spirits bound within a database's vault.",
      experience: "2+ Years",
      mastery: 3,
      projects: "10+",
    },
  ],
  frontend: [
    {
      id: "react",
      name: "React",
      icon: <StackIcon name="react" />,
      rarity: "legendary",
      description:
        "A legendary frontend library used to forge interactive interfaces and modern web experiences.",
      experience: "6 Months",
      mastery: 5,
      projects: "15+",
      favorite: true,
    },
    {
      id: "vite",
      name: "Vite",
      icon: <StackIcon name="vite" />,
      rarity: "epic",
      description:
        "A blazing-fast forge that builds and reloads projects in the blink of an eye.",
      experience: "6 Months",
      mastery: 4,
      projects: "10+",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <StackIcon name="tailwind" />,
      rarity: "epic",
      description:
        "Utility runes stacked together to conjure styles without ever leaving the scroll.",
      experience: "6 Months",
      mastery: 5,
      projects: "12+",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <StackIcon name="bootstrap" />,
      rarity: "rare",
      description:
        "A trusty old shield, reliable for quick and sturdy layouts in a pinch.",
      experience: "2+ Years",
      mastery: 3,
      projects: "6+",
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      icon: <StackIcon name="framer-motion" />,
      rarity: "rare",
      description:
        "A motion enchantment that breathes life and fluidity into static elements.",
      experience: "1+ Year",
      mastery: 3,
      projects: "5+",
    },
  ],
  backend: [
    {
      id: "nodejs",
      name: "Node.js",
      icon: <StackIcon name="nodejs" />,
      rarity: "legendary",
      description:
        "The engine that lets JavaScript magic run beyond the browser's walls.",
      experience: "6 Months",
      mastery: 5,
      projects: "15+",
    },
    {
      id: "expressjs",
      name: "Express.js",
      icon: <StackIcon name="express" />,
      rarity: "epic",
      description:
        "A lightweight framework-scroll for routing requests through the server halls.",
      experience: "6 Months",
      mastery: 4,
      projects: "12+",
    },

    {
      id: "mysql",
      name: "MySQL",
      icon: <StackIcon name="sql" />,
      rarity: "rare",
      description:
        "A relational vault where structured data is kept safe and orderly.",
      experience: "2+ Years",
      mastery: 3,
      projects: "8+",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <StackIcon name="mongodb" />,
      rarity: "epic",
      description:
        "A flexible document vault, storing treasures without rigid form.",
      experience: "5 Months",
      mastery: 4,
      projects: "10+",
    },
    {
      id: "supabase",
      name: "Supabase",
      icon: <StackIcon name="supabase" />,
      rarity: "rare",
      description:
        "A modern backend-in-a-box, granting swift access to databases and auth magic.",
      experience: "1+ Year",
      mastery: 3,
      projects: "6+",
    },
  ],
  cloud: [
    {
      id: "git",
      name: "Git",
      icon: <StackIcon name="git" />,
      rarity: "legendary",
      description:
        "The time-turner of code, letting a developer travel through a project's history.",
      experience: "6 Months",
      mastery: 5,
      projects: "30+",
    },
    {
      id: "github",
      name: "GitHub",
      icon: <StackIcon name="github" />,
      rarity: "epic",
      description:
        "A grand hall where repositories are stored, shared, and guarded.",
      experience: "7 Months",
      mastery: 5,
      projects: "30+",
    },
    {
      id: "vercel",
      name: "Vercel",
      icon: <StackIcon name="vercel" />,
      rarity: "rare",
      description:
        "A swift deployment portal that teleports projects onto the web instantly.",
      experience: "6 Months",
      mastery: 3,
      projects: "10+",
    },
    {
      id: "hostinger",
      name: "Hostinger",
      icon: <StackIcon name="hostinger" />,
      rarity: "uncommon",
      description:
        "A rented plot of server land, used for hosting client strongholds.",
      experience: "1+ Year",
      mastery: 2,
      projects: "4+",
    },
    {
      id: "npm",
      name: "npm",
      icon: <StackIcon name="npm" />,
      rarity: "epic",
      description:
        "A vast marketplace of packaged spells, ready to be summoned into any project.",
      experience: " 6 Months",
      mastery: 4,
      projects: "20+",
    },
  ],
  ai: [
    {
      id: "chatgpt",
      name: "ChatGPT",
      icon: <StackIcon name="chatgpt" />,
      rarity: "legendary",
      description:
        "An oracle of knowledge, answering nearly any question a developer dares to ask.",
      experience: "2+ Years",
      mastery: 5,
      projects: "20+",
      favorite: true,
    },
    {
      id: "copilot",
      name: "GitHub Copilot",
      icon: <StackIcon name="copilot" />,
      rarity: "epic",
      description:
        "A spectral coding familiar that whispers suggestions as you type.",
      experience: "1 Month",
      mastery: 4,
      projects: "15+",
    },
    {
      id: "claude",
      name: "Claude",
      icon: <StackIcon name="claude" />,
      rarity: "legendary",
      description:
        "A wise and thoughtful familiar, favored for deep reasoning and careful craft.",
      experience: "1+ Year",
      mastery: 5,
      projects: "15+",
      favorite: true,
    },
    {
      id: "gemini",
      name: "Gemini",
      icon: <StackIcon name="gemini" />,
      rarity: "rare",
      description:
        "A twin-natured oracle, useful for research and creative brainstorming alike.",
      experience: "1+ Year",
      mastery: 3,
      projects: "5+",
    },
    {
      id: "cline",
      name: "Cline",
      icon: <StackIcon name="cline" />,
      rarity: "uncommon",
      description:
        "An autonomous coding sprite that executes tasks within the editor itself.",
      experience: "1 Year",
      mastery: 2,
      projects: "3+",
    },
    {
      id: "cursor",
      name: "Cursor",
      icon: <StackIcon name="cursor" />,
      rarity: "rare",
      description:
        "An enchanted editor infused with AI foresight for faster spellcasting.",
      experience: "1+ Year",
      mastery: 3,
      projects: "6+",
    },
  ],
};

const RARITY_LABELS = {
  common: "Common",
  uncommon: "Uncommon",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

const CATEGORY_LABEL_BY_ID = CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.label;
  return acc;
}, {});

/* =========================================================
   TECH LOGO MAP — real icons for each tech tool
   ========================================================= */

const TECH_LOGOS = {
  html5: <StackIcon name="html5" />,
  css3: <StackIcon name="css3" />,
  javascript: <StackIcon name="js" />,
  php: <StackIcon name="php" />,
  php_backend: <StackIcon name="php" />,
  sql: <StackIcon name="sqldeveloper" />,
  react: <StackIcon name="react" />,
  nodejs: <StackIcon name="nodejs" />,
  expressjs: <StackIcon name="expressjs" />,
  mysql: <StackIcon name="mysql" />,
  mongodb: <StackIcon name="mongodb" />,
  supabase: <StackIcon name="supabase" />,
  mongoose: <span style={{ fontSize: "0.55em" }}>Mng</span>,
  vite: <StackIcon name="vitejs" />,
  tailwind: <StackIcon name="tailwindcss" />,
  bootstrap: <StackIcon name="bootstrap5" />,
  "framer-motion": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      id="Brand-Framer-Motion--Streamline-Tabler"
      height={24}
      width={24}
    >
      <desc>
        {
          "\n    Brand Framer Motion Streamline Icon: https://streamlinehq.com\n  "
        }
      </desc>
      <path d="M12 12 4 4v16L20 4v16l-4 -4" strokeWidth={2} />
      <path d="m20 12 -8 8 -4 -4" strokeWidth={2} />
    </svg>
  ),
  git: <StackIcon name="git" />,
  github: <StackIcon name="github" />,
  "github-pages": <StackIcon name="github-pages" />,
  vercel: <StackIcon name="vercel" />,
  hostinger: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="Hostinger--Streamline-Simple-Icons"
      height={24}
      width={24}
    >
      <desc>
        {"\n    Hostinger Streamline Icon: https://streamlinehq.com\n  "}
      </desc>
      <title>{"Hostinger"}</title>
      <path
        d="M16.415 0v7.16l5.785 3.384V2.949L16.415 0ZM1.8 0v11.237h18.815L14.89 8.09l-7.457 -0.003V3.024L1.8 0Zm14.615 20.894v-5.019l-7.514 -0.005c0.007 0.033 -5.82 -3.197 -5.82 -3.197l19.119 0.091V24l-5.785 -3.106ZM1.8 13.551v7.343l5.633 2.949v-6.988L1.8 13.551Z"
        fill="#000000"
        strokeWidth={1}
      />
    </svg>
  ),
  npm: <FaNpm />,
  chatgpt: (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      id="Chromatic--Streamline-Simple-Icons"
      height={24}
      width={24}
    >
      <desc>
        {"\n    Chromatic Streamline Icon: https://streamlinehq.com\n  "}
      </desc>
      <title>{"Chromatic"}</title>
      <path
        d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12 -12A12 12 0 0 0 12 0zm-0.006 3.43a3.372 3.372 0 0 1 3.37 3.369v2.199L9.628 5.689a4.261 4.261 0 0 0 -0.688 -0.32 3.351 3.351 0 0 1 3.053 -1.94zm-4.498 2.6c0.588 0 1.17 0.156 1.684 0.452l5.734 3.311 -2.91 1.678 -3.6 -2.076a0.46 0.46 0 0 0 -0.459 0L5.35 10.893c-0.22 0.126 -0.428 0.27 -0.621 0.433a3.349 3.349 0 0 1 -0.155 -3.61A3.385 3.385 0 0 1 7.496 6.03zm8.723 0.015a3.383 3.383 0 0 1 3.205 1.672 3.37 3.37 0 0 1 -1.235 4.6l-5.736 3.308v-3.357l3.602 -2.077a0.459 0.459 0 0 0 0.228 -0.398V6.799c0 -0.253 -0.021 -0.506 -0.064 -0.754zm-8.504 4.543v6.617c0 0.254 0.021 0.505 0.066 0.754a3.4 3.4 0 0 1 -0.285 0.012 3.383 3.383 0 0 1 -2.92 -1.684 3.343 3.343 0 0 1 -0.338 -2.555 3.342 3.342 0 0 1 1.57 -2.044l1.907 -1.1zm0.908 0 2.912 1.68v4.152a0.46 0.46 0 0 0 0.23 0.396l2.594 1.498h0.002c0.22 0.127 0.45 0.235 0.688 0.32a3.35 3.35 0 0 1 -3.055 1.938 3.373 3.373 0 0 1 -3.371 -3.367v-6.617zm10.647 2.088a3.347 3.347 0 0 1 0.154 3.611 3.372 3.372 0 0 1 -4.604 1.233l-1.908 -1.1 5.738 -3.309a4.31 4.31 0 0 0 0.62 -0.435z"
        fill="#000000"
        strokeWidth={1}
      />
    </svg>
  ),
  copilot: <StackIcon name="copilotgithub" />,
  claude: <StackIcon name="claude" />,
  gemini: <StackIcon name="gemini" />,
  cline: <StackIcon name="cline" />,
  cursor: <StackIcon name="cursor" />,
  openrouter: <span style={{ fontSize: "0.5em" }}>OR</span>,
};

function TechIcon({ techId }) {
  return TECH_LOGOS[techId] || <span>?</span>;
}

/* =========================================================
   SMALL PRESENTATIONAL PIECES
   ========================================================= */

function CornerOrnaments() {
  return (
    <>
      <span className="rpg-corner rpg-corner-tl" />
      <span className="rpg-corner rpg-corner-tr" />
      <span className="rpg-corner rpg-corner-br" />
      <span className="rpg-corner rpg-corner-bl" />
    </>
  );
}

function Stars({ count }) {
  const total = 5;
  return (
    <span className="rpg-stars rpg-pixel-font" style={{ fontSize: "11px" }}>
      {"★".repeat(count)}
      <span style={{ opacity: 0.25 }}>{"★".repeat(total - count)}</span>
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function DeveloperInventory() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [selectedTech, setSelectedTech] = useState(TECHS[CATEGORIES[0].id][0]);

  const currentTechs = useMemo(
    () => TECHS[activeCategory] || [],
    [activeCategory],
  );

  const slots = useMemo(() => {
    const filled = currentTechs.map((t) => ({ filled: true, tech: t }));
    const emptyCount = Math.max(SLOTS_PER_CATEGORY - filled.length, 0);
    const empties = Array.from({ length: emptyCount }, (_, i) => ({
      filled: false,
      key: `empty-${i}`,
    }));
    return [...filled, ...empties];
  }, [currentTechs]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    const firstTech = TECHS[categoryId]?.[0] || null;
    setSelectedTech(firstTech);
  };

  const handleSlotClick = (tech) => {
    if (!tech) return;
    setSelectedTech(tech);
  };

  const capacityUsed = currentTechs.length;
  const capacityTotal = SLOTS_PER_CATEGORY;
  const capacityPct = Math.min((capacityUsed / capacityTotal) * 100, 100);

  return (
    <section id="techstack" className="rpg-section">
      <div className="rpg-vignette" />
      <div className="rpg-layout">
        {/* ================= LEFT — Sidebar ================= */}
        <div className="rpg-sidebar">
          <CornerOrnaments />
          <h2 className="rpg-sidebar-title">Skills</h2>
          <div className="rpg-divider-short" />
          <nav className="rpg-nav">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCategoryClick(cat.id)}
                className={
                  "rpg-nav-btn" +
                  (activeCategory === cat.id ? " is-active" : "")
                }
              >
                <span className="rpg-nav-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>

        {/* ================= CENTER — Inventory Grid ================= */}
        <div className="rpg-center">
          <CornerOrnaments />
          <div className="rpg-center-header">
            <h1 className="rpg-center-title">Inventory</h1>
            <span className="rpg-capacity-text">
              {capacityUsed}/{capacityTotal}
            </span>
          </div>
          <div className="rpg-capacity-bar">
            <div
              className="rpg-capacity-fill"
              style={{ width: `${capacityPct}%` }}
            />
          </div>
          <div className="rpg-divider-short" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rpg-grid"
            >
              {slots.map((slot, idx) =>
                slot.filled ? (
                  <motion.button
                    key={slot.tech.id}
                    type="button"
                    layout
                    whileHover={{ y: -3 }}
                    onClick={() => handleSlotClick(slot.tech)}
                    data-rarity={slot.tech.rarity}
                    className={
                      "rpg-slot" +
                      (selectedTech?.id === slot.tech.id ? " is-selected" : "")
                    }
                    title={slot.tech.name}
                  >
                    <span className="rpg-slot-icon">
                      <TechIcon techId={slot.tech.id} />
                    </span>
                    {slot.tech.favorite && (
                      <span className="rpg-slot-fav">★</span>
                    )}
                  </motion.button>
                ) : (
                  <div key={slot.key} className="rpg-slot is-empty" />
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= RIGHT — Details Panel ================= */}
        <div className="rpg-details">
          <CornerOrnaments />
          <AnimatePresence mode="wait">
            {selectedTech ? (
              <motion.div
                key={selectedTech.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="rpg-details-content"
              >
                <div
                  className="rpg-icon-frame"
                  data-rarity={selectedTech.rarity}
                  style={{
                    border: `2px solid var(--rarity-${selectedTech.rarity})`,
                    boxShadow: `0 0 14px var(--rarity-${selectedTech.rarity}-glow)`,
                  }}
                >
                  <TechIcon techId={selectedTech.id} />
                </div>
                <div className="rpg-details-name">
                  <h3>{selectedTech.name}</h3>
                  {selectedTech.favorite && (
                    <span className="rpg-badge">♦ Fav</span>
                  )}
                </div>
                <p className="rpg-details-desc">{selectedTech.description}</p>
                <div className="rpg-divider-short" />
                <div className="rpg-stats">
                  <div className="rpg-stat-row">
                    <span>Category</span>
                    <span>{CATEGORY_LABEL_BY_ID[activeCategory]}</span>
                  </div>
                  <div className="rpg-stat-row">
                    <span>Rarity</span>
                    <span
                      style={{ color: `var(--rarity-${selectedTech.rarity})` }}
                    >
                      {RARITY_LABELS[selectedTech.rarity]}
                    </span>
                  </div>
                  <div className="rpg-stat-row">
                    <span>Exp</span>
                    <span>{selectedTech.experience}</span>
                  </div>
                  <div className="rpg-stat-row">
                    <span>Mastery</span>
                    <Stars count={selectedTech.mastery} />
                  </div>
                  <div
                    className="rpg-stat-row"
                    style={{ borderBottom: "none" }}
                  >
                    <span>Projects</span>
                    <span>{selectedTech.projects}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="rpg-empty-state">
                <p>— No item selected —</p>
                <p>Choose an item from the inventory.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
