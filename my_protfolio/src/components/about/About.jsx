import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <p className="section-subtitle">
          Get To Know Me
        </p>

        <h2>About Me</h2>

        <p className="about-description">
          I'm a B.Tech Electronics & Communication Engineering student
          with a strong interest in Software Development and Full Stack
          Development.
        </p>

        <p className="about-description">
          I work with Java, Spring Boot, React, JavaScript, SQL, and other
          web technologies to build practical and user-focused applications.
          I also enjoy solving Data Structures and Algorithms problems to
          improve my problem-solving skills.
        </p>

        <p className="about-description">
          I'm currently focused on strengthening my development and DSA
          skills while preparing for Software Engineering opportunities.
        </p>

      </div>

      <div className="about-highlights">

        <div className="highlight-card">
          <h3>🎓 Education</h3>
          <p>B.Tech ECE</p>
          <span>2023 – 2027</span>
        </div>

        <div className="highlight-card">
          <h3>💻 Development</h3>
          <p>Java • Spring Boot • React</p>
          <span>Full Stack Development</span>
        </div>

        <div className="highlight-card">
          <h3>🧩 Problem Solving</h3>
          <p>Data Structures & Algorithms</p>
          <span>LeetCode</span>
        </div>

        <div className="highlight-card">
          <h3>🚀 Career Goal</h3>
          <p>Software Engineer</p>
          <span>Full Stack Developer</span>
        </div>

      </div>

    </section>
  );
}

export default About;