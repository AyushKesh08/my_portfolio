import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <p className="section-subtitle">What I've Built</p>
        <h2>Projects</h2>
        <p className="projects-intro">
          A collection of projects I've built while learning and
          exploring software development.
        </p>
      </div>

      <div className="projects-container">

        {/* School Management System */}

        <div className="project-card">

          <div className="project-image">
            <div className="project-placeholder">
              School Management System
            </div>
          </div>

          <div className="project-content">

            <h3>School Management System</h3>

            <p>
              A web-based school management system with student
              management, authentication, CRUD operations, image
              upload, and email verification.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Servlet</span>
              <span>JSP</span>
              <span>MySQL</span>
              <span>Tomcat</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/AyushKesh08/Student_Management_System.git" target="_blank">GitHub</a>
              {/* <a href="#" target="_blank">Live Demo</a> */}
            </div>

          </div>

        </div>


        {/* FakeStore */}

        <div className="project-card">

          <div className="project-image">
            <div className="project-placeholder">
              FakeStore E-Commerce
            </div>
          </div>

          <div className="project-content">

            <h3>FakeStore E-Commerce</h3>

            <p>
              A responsive e-commerce frontend built with React
              featuring product categories, product cards, and
              interactive user interface.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/AyushKesh08/FakeStore_E-Commerce.git" target="_blank">GitHub</a>
              {/* <a href="#" target="_blank">Live Demo</a> */}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;