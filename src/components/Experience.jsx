import "./Experience.css";

export default function Experience() {
  const projects = [
    {
      id: 1,
      title: "Productivity Timer",
      subtitle: "Pomodoro Technique",
      image: "images/Productivity_timer.png",
      link: "https://pamplonajp45-eng.github.io/my-react-app/",
      tags: [
        "React",
        "Timer",
        "Productivity",
        "Node.js",
        "Local Storage",
        "PWA",
      ],
    },
    {
      id: 2,
      title: "Habit Tracker",
      subtitle: "Track your habits and routines effectively",
      image: "images/habit.png",
      link: "https://pamplonajp45-eng.github.io/jpdev-habit-tracker/",
      tags: ["React", "Tasks", "Planning", "Local Storage", "PWA"],
    },
    {
      id: 3,
      title: "Pill Reminder App",
      subtitle:
        'LUNO is a modern, minimalist companion for your wellness journey. "Luna" (moon), symbolizing guidance, cycles, and care. It’s designed to be a gentle, brandable, and user-friendly reminder app that feels like a wellness companion rather than just a tool.',
      image: "images/luno.png",
      link: "https://luno-pillreminderapp.vercel.app/",
      tags: ["API", "React", "Node.js", "Reminder", "Local Storage", "PWA"],
    },
    {
      id: 4,
      title: "PUP Dental and Medical MS",
      subtitle: " Simple management system for university clincs",
      image: "images/capstone.png",
      link: "https://mdclinicms2025.site/",
      tags: ["CRUD", "Appointment", "Storage", "PHP", "MySQL"],
    },
    {
      id: 5,
      title: "JP-FUSION LAB",
      subtitle: " A website for my brother's 3D printing business",
      image: "images/jpfusionlab.png",
      tags: [
        "CRUD",
        "API",
        "MONGODB ATLAS",
        "Express.js",
        "React.js",
        "Node.js",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Things I’ve Built</h2>
          <p className="experience-subtitle">
            Projects showcasing my skills in building modern web applications.
          </p>
        </div>

        <div className="experience-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card"
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-overlay"></div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-subtitle">{project.subtitle}</p>

                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L10 4M16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
