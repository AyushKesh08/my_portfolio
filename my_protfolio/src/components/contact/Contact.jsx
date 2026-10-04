import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-subtitle">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, projects,
          and collaborations.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Let's Connect</h3>

          <p>
            If you'd like to discuss a project, internship, or software
            development opportunity, feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushkesharwani1708@gmail.com">
              📧 Email
            </a>

            <a href="https://linkedin.com/in/ayush-kesharwani-018380395" target="_blank" rel="noreferrer">
              💼 LinkedIn
            </a>

            <a href="https://github.com/AyushKesh08" target="_blank" rel="noreferrer">
              💻 GitHub
            </a>

            <a href="https://leetcode.com/u/Ayush_code08" target="_blank" rel="noreferrer">
              🧩 LeetCode
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h3>Looking For</h3>

          <div className="contact-looking">
            <span>Software Engineering Roles</span>
            <span>Full Stack Development</span>
            <span>Internships</span>
            <span>Collaborations</span>
          </div>

          <a href="/Ayush_Resume.pdf" target="_blank" className="contact-resume">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;