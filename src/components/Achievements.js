import React from "react";

const achievements = [
  "Winner – PyExpo Innovation Challenge 2025",
  "Hackathon Finalist – AI for Accessibility",
  "Coursera Certificate – Machine Learning (Andrew Ng)",
  "Completed Data Visualization with Python (IBM Skills Network)",
];

const Achievements = () => (
  <div className="section-container text-center">
    <h2 className="section-title">Achievements & Certificates</h2>
    <ul className="list-unstyled mt-3">
      {achievements.map((a, i) => (
        <li key={i} className="mb-2">
          🏅 {a}
        </li>
      ))}
    </ul>
  </div>
);

export default Achievements;
