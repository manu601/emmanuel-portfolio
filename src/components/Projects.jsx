import portfolioPreview from "../assets/portfolio-preview.svg";
import trolleyPreview from "../assets/trolley-preview.svg";
import careerPreview from "../assets/career-preview.svg";

function Projects() {
  return (
    <section className="projects" id="projects">

      <p className="section-tag">PROJECTS</p>

      <h2>Featured Projects & Academic Work</h2>

      <div className="projects-grid">

        <div className="project-card">

          <div className="project-image">
            <img src={trolleyPreview} alt="Smart trolley system preview" />
          </div>

          <div className="project-content">

            <h3>Smart Trolley System</h3>

            <p>
              University team project that developed an automated shopping
              trolley with a database and user interface to improve the
              shopping experience.
            </p>

            <div className="tech-stack">
              <span>MySQL</span>
              <span>Database Design</span>
              <span>UI Design</span>
            </div>

            <div className="project-links">
              <a href="#">GitHub</a>
            </div>

          </div>

        </div>

        <div className="project-card">

          <div className="project-image">
            <img src={careerPreview} alt="Student career database preview" />
          </div>

          <div className="project-content">

            <h3>Student Career Database</h3>

            <p>
              Designed a relational database that connects university courses,
              degrees, and career opportunities to help students explore
              potential career paths.
            </p>

            <div className="tech-stack">
              <span>MySQL</span>
              <span>Database</span>
              <span>SQL</span>
            </div>

            <div className="project-links">
              <a href="#">GitHub</a>
            </div>

          </div>

        </div>

        <div className="project-card">

          <div className="project-image">
            <img src={portfolioPreview} alt="Personal portfolio preview" />
          </div>

          <div className="project-content">

            <h3>Personal Portfolio</h3>

            <p>
              Responsive portfolio website developed using React and Vite to
              showcase my education, skills, experience, and projects.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/manu601/emmanuel-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;