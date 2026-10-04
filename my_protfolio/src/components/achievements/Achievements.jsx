import "./Achievements.css";
import SIH_IMAGE from "../../assets/SIH.jpeg"
import NASA_IMAGE from "../../assets/Nasa.jpeg"
import C_IMAGE from "../../assets/C.jpeg"

function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <div className="achievements-header">
        <p className="section-subtitle">Milestones & Recognition</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievements-container">

        {/* SIH 2025 */}
        <div className="achievement-card">

          <div className="achievement-image">
            <img
              src={SIH_IMAGE}
              alt="Smart India Hackathon 2025 Certificate"
            />
          </div>

          <div className="achievement-content">
            <h3>Smart India Hackathon 2025</h3>

            <p>
              Participated in Smart India Hackathon 2025 and worked
              collaboratively with a team to develop a solution for
              a real-world problem statement.
            </p>
          </div>

        </div>


        {/* NASA Space Apps */}
        <div className="achievement-card">

          <div className="achievement-image">
            <img
              src={NASA_IMAGE}
              alt="NASA Space Apps Challenge Certificate"
            />
          </div>

          <div className="achievement-content">
            <h3>NASA Space Apps Challenge</h3>

            <p>
              Participated in the NASA Space Apps Challenge and
              collaborated with a team to work on a challenge
              involving technology and real-world problem solving.
            </p>
          </div>

        </div>


        {/* BSNL */}
        <div className="achievement-card">

          <div className="achievement-image">
            <img
              src={C_IMAGE}
              alt="C Certificate"
            />
          </div>

          <div className="achievement-content">
            <h3>C Programming</h3>

            <p>
                Successfully completed the Introduction to C Programming course
                offered through SWAYAM-IIMB. Gained a strong understanding of
                C programming fundamentals, problem-solving, and core programming concepts.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;