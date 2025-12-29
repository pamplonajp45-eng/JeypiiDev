import "./Home.css";

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-container">
      <div className="home-grid">
        <div className="home-content">
          <div className="home-intro">
            <p className="greeting">What's up!</p>
            <h1 className="home-title">Jordan Pamplona</h1>
          </div>

          <p className="home-description">
            Full-Stack developer who loves building clean, responsive, and
            user-friendly web applications that turn ideas
            <span className="highlight"> into reality.</span>
          </p>
        </div>

        <div className="image-container">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img
              src="../profile.jpg"
              alt="Jordan Pamplona"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="floating-orb orb-1"></div>
    <div className="floating-orb orb-2"></div>
  </section>
);

export default Home;
