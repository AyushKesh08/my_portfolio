import "./Hero.css";
import profileImage from '../../assets/ayush.jpeg';

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hi, I'm Ayush Kesharwani 👋
        </p>

        <h1>
          Software Engineer / Full Stack Developer
        </h1>

        <p className="hero-description">
          I build web applications using Java, Spring Boot and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="/Ayush_Resume.pdf" target="_blank">Resume</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/AyushKesh08">GitHub</a>
          <a href="https://linkedin.com/in/ayush-kesharwani-018380395">LinkedIn</a>
          <a href="https://leetcode.com/u/Ayush_code08">LeetCode</a>
        </div>

      </div>


      <div className="hero-image">
        <img src={profileImage} alt="Ayush" />
      </div>

    </section>
  );
}

export default Hero;