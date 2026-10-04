import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <p className="section-subtitle">What I Work With</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Programming</h3>

          <div className="skill-list">
            <span>C</span>
            <span>Java</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Frontend</h3>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Fetch API</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>

          <div className="skill-list">
            <span>Spring</span>
            <span>Spring Boot</span>
            <span>Servlet</span>
            <span>JSP</span>
            <span>Hibernate</span>
            <span>JPA</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Database</h3>

          <div className="skill-list">
            <span>MySQL</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>

          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>Apache Tomcat</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;