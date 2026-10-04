import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <p className="section-subtitle">My Professional Journey</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-icon">
            💻
          </div>

          <div className="experience-content">
            <div className="experience-top">
              <div>
                <h3>Java Development Traning</h3>
                <h4>ISRDC JBP</h4>
              </div>

              <span className="experience-date">
                Traning
              </span>
            </div>

            <p className="experience-description">
              Worked on Java-based software development and gained
              practical experience in backend development, database
              integration, debugging, and application development.
            </p>

            <div className="experience-tech">
              <span>Java</span>
              <span>SQL</span>
              <span>Servlet</span>
              <span>JSP</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="fresher-note">
          <p>
            🎯 Currently seeking opportunities as a Software Engineer
            / Full Stack Developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;