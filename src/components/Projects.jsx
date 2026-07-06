function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of systems and applications I’ve built or worked on.
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <h3>M-Pesa Bill Manager</h3>
            <p>
              A mobile app for tracking and managing M-Pesa transactions and bills.
              Built using React Native and Expo.
            </p>

            <div className="project-links">
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Trolley System</h3>
            <p>
              IoT-based shopping trolley that scans products using barcode
              technology and calculates total cost in real time.
            </p>

            <div className="project-links">
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Intruder Detection System</h3>
            <p>
              Python-based security system that captures images when unauthorized
              access is detected.
            </p>

            <div className="project-links">
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Web Portfolio</h3>
            <p>
              Personal portfolio website built with React showcasing my skills,
              projects, and experience.
            </p>

            <div className="project-links">
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;