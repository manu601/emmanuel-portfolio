function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p className="skills-intro">
          A combination of software development, ICT systems, data, and security knowledge.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Mobile Development</h3>
            <p>React Native, Android (Java/Kotlin basics)</p>
          </div>

          <div className="skill-card">
            <h3>Backend & Databases</h3>
            <p>MySQL, basic API integration, data structures</p>
          </div>

          <div className="skill-card">
            <h3>ICT & Systems</h3>
            <p>IT support, Windows/Linux, troubleshooting</p>
          </div>

          <div className="skill-card">
            <h3>Cybersecurity</h3>
            <p>TryHackMe fundamentals, networking basics</p>
          </div>

          <div className="skill-card">
            <h3>Data & Research</h3>
            <p>WorldQuant BRAIN, quantitative signals, data analysis</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python, scripting, automation basics</p>
          </div>

          <div className="skill-card">
            <h3>Hardware & Embedded</h3>
            <p>Microprocessor systems, CAD basics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;