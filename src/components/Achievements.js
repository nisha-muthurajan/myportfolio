import React from "react";

const achievements = [
  "Winner – PyExpo Innovation Challenge 2025",
  "Hackathon Finalist – AI for Accessibility",
  "Coursera Certificate – Machine Learning (Andrew Ng)",
  "Completed Data Visualization with Python (IBM Skills Network)",
];

const Achievements = () => (
  <div className="section-container achievements-section">
    <div className="section-heading">
      <span className="section-eyebrow">Milestones</span>
      <h2 className="section-title">Achievements &amp; Certificates</h2>
    </div>
    <ul className="achievement-list">
      {achievements.map((a, i) => (
        <li key={i} className="achievement-item">
          <span className="achievement-dot">✦</span>
          <span>{a}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Achievements;
