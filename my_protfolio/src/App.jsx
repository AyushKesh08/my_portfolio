import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import LeetCode from "./components/leetcode/LeetCode.jsx";
import Education from "./components/education/Education.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Experience from "./components/experience/Experience.jsx";
import Achievements from "./components/achievements/Achievements.jsx";

function App(){
  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <LeetCode />
      <Education />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;