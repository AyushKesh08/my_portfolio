import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-header">
        <p className="section-subtitle">My Academic Background</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        {/* B.Tech */}

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">

            <h3>Bachelor of Technology</h3>

            <h4>
              Electronics & Communication Engineering
            </h4>

            <p className="college-name">
              Baderia Global Institute of Engineering and Management
            </p>

            <div className="education-details">
              <span>2023 – 2027</span>
              <span>CGPA: 7.8</span>
            </div>

          </div>

        </div>

        

        {/* Class 12 */}

        <div className="education-card">

          <div className="education-icon">
            📚
          </div>

          <div className="education-content">

            <h3>Class 12th</h3>

            <h4>
              Ashoka Hall Junior & High School.
            </h4>

            {/* <p className="college-name">
              Higher Secondary School
            </p> */}

            <div className="education-details">
              <span>2023</span>
            </div>

          </div>

        </div>


        {/* Class 10 */}

        <div className="education-card">

          <div className="education-icon">
            📖
          </div>

          <div className="education-content">

            <h3>Class 10th</h3>

            <h4>
              Ashoka Hall Junior & High School.
            </h4>

            {/* <p className="college-name">
              Secondary School
            </p> */}

            <div className="education-details">
              <span>2021</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;
