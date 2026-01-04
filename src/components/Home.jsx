import "./Home.css";

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-container">
      <div className="home-grid">
        <div className="home-content">
          <div className="home-intro">
            <p className="greeting">Hey!, I'm</p>
            <h1 className="home-title">Jordan O. Pamplona</h1>
          </div>
          <p className="home-description">
            I don’t just build websites and apps that make people go,{" "}
            <i>“Wait — how’d they do that?”.</i> I craft digital experiences
            that stick. I’m a{" "}
            <span className="highlight">MERN full-stack developer</span>
            with a passion for clean code, seamless interactions, and making the
            impossible
            <span className="highlight"> feel effortless.</span>
          </p>
        </div>

        <div className="image-container">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img
              src="profile2.png"
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
