import "./LeetCode.css";
import { useState, useEffect } from "react"
import axios from 'axios';

function LeetCode() {

  const [state,setState] = useState({
    ranking: "--",
    totalSolved: "--",
    easySolved: "--",
    mediumSolved: "--",
    hardSolved: "--"
  });

  useEffect(() => {
    async function getData() {
      try {
        const resp = await axios.get(
          "https://alfa-leetcode-api.onrender.com/Ayush_code08/profile"
        );

        setState(resp.data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <section className="leetcode" id="leetcode">

      <div className="leetcode-header">
        <p className="section-subtitle">My Coding Journey</p>

        <h2>LeetCode</h2>

        <p className="leetcode-intro">
          I regularly practice Data Structures and Algorithms
          to improve my problem-solving skills.
        </p>
      </div>


      <div className="leetcode-container">

        <div className="leetcode-card">
          <h3>Global Rank</h3>
          <p>{state.ranking}</p>
        </div>
        
        <div className="leetcode-card">
          <h3>Total Solved</h3>
          <p>{state.totalSolved}</p>
        </div>

        <div className="leetcode-card">
          <h3>Easy</h3>
          <p>{state.easySolved}</p>
        </div>

        <div className="leetcode-card">
          <h3>Medium</h3>
          <p>{state.mediumSolved}</p>
        </div>

        <div className="leetcode-card">
          <h3>Hard</h3>
          <p>{state.hardSolved}</p>
        </div>


        {/* <div className="leetcode-card">
          <h3>Contest Rating</h3>
          <p>--</p>
        </div> */}

      </div>


      <div className="leetcode-profile">
        <a
          href="https://leetcode.com/u/Ayush_code08"
          target="_blank"
          rel="noreferrer"
        >
          View LeetCode Profile
        </a>
      </div>

    </section>
  );
}

export default LeetCode;