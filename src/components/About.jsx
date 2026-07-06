function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I am an ICT professional and software developer with a strong
          background in building practical technology solutions across web,
          mobile, systems, and data environments.
        </p>

        <p>
          My experience spans web development, Android development, databases,
          microprocessor systems, and cybersecurity fundamentals, along with
          exposure to quantitative research using WorldQuant BRAIN.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>Development</h3>
            <p>Web & Android applications using modern tools and frameworks.</p>
          </div>

          <div className="card">
            <h3>Systems & ICT</h3>
            <p>IT support, systems administration, and technical troubleshooting.</p>
          </div>

          <div className="card">
            <h3>Data & Databases</h3>
            <p>MySQL, data entry systems, and structured data workflows.</p>
          </div>

          <div className="card">
            <h3>Security & Research</h3>
            <p>Cybersecurity fundamentals and quantitative research (WorldQuant BRAIN).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;