import React from "react";
import { ProgressBar } from "react-bootstrap";

const skills = [
  { name: "Python", level: 90 },
  { name: "Pandas / NumPy", level: 85 },
  { name: "Machine Learning", level: 80 },
  { name: "Deep Learning", level: 70 },
  { name: "SQL", level: 75 },
  { name: "Power BI / Visualization", level: 80 },
];

const Skills = () => (
  <div className="section-container">
    <h2 className="section-title text-center">Skills</h2>
    <div className="w-75 mx-auto">
      {skills.map((skill, i) => (
        <div key={i} className="mb-3">
          <strong>{skill.name}</strong>
          <ProgressBar now={skill.level} label={`${skill.level}%`} />
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
