import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">

        <p className="hero-greeting">HELLO, I'M</p>

        <h1>Emmanuel Kipyegon</h1>

        <h2>
          Software Developer
          <span> | ICT Professional</span>
        </h2>

        <p className="hero-description">
          Bachelor of Science graduate in Microprocessor Technology and
          Instrumentation with experience in software development,
          database systems, research, and IT support. Passionate about
          building practical technology solutions that solve real-world
          problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a
            href="/EMMANUEL.pdf"
            className="secondary-btn"
            download="EMMANUEL.pdf"
          >
            Download CV
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img src={profile} alt="Emmanuel Kipyegon" />
      </div>
    </section>
  );
}

export default Hero;