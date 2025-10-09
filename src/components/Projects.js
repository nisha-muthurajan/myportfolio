import React from "react";
import { Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Farmer Marketplace",
    desc: "A platform enabling farmers to sell directly to customers.",
    tools: "Django, Bootstrap, SQLite",
    link: "https://github.com/yourusername/farmer-marketplace",
  },
  {
    title: "AI Virtual Patient",
    desc: "Simulated patient interaction system for psychology training.",
    tools: "React, Django, NLP",
    link: "https://github.com/yourusername/ai-virtual-patient",
  },
  {
    title: "Weather Prediction System",
    desc: "Predicts weather using machine learning algorithms.",
    tools: "Python, Scikit-learn, Flask",
    link: "https://github.com/yourusername/weather-prediction",
  },
];

const Projects = () => (
  <div className="section-container text-center">
    <h2 className="section-title">Projects</h2>
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {projects.map((proj, i) => (
        <Card key={i} style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{proj.title}</Card.Title>
            <Card.Text>{proj.desc}</Card.Text>
            <p className="text-muted">{proj.tools}</p>
            <Button variant="primary" href={proj.link} target="_blank">
              View on GitHub
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
);

export default Projects;
