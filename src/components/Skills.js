import React from "react";
import { motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    icon: "</>",
    skills: ["Python", "C", "Java"],
  },
  {
    number: "02",
    title: "AI / Machine Learning",
    icon: "AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "YOLOv8",
      "Regression",
      "Classification",
      "Object Detection",
      "Agentic AI",
    ],
  },
  {
    number: "03",
    title: "Data Science",
    icon: "∑",
    skills: [
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Data Visualization",
      "SQL",
    ],
  },
  {
    number: "04",
    title: "Web Development",
    icon: "↗",
    skills: ["HTML", "CSS", "Bootstrap", "React", "Flask"],
  },
  {
    number: "05",
    title: "Tools & Platforms",
    icon: "⌘",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Docker"],
  },
  {
    number: "06",
    title: "Databases",
    icon: "◫",
    skills: ["SQLite", "Firebase"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: index * 0.08 },
  }),
};

const Skills = () => (
  <div className="section-container skills-section">
    <div className="section-heading">
      <span className="section-eyebrow">What I work with</span>
      <h2 className="section-title">Skills</h2>
      <p className="section-lead">
        A practical toolkit for building intelligent products from data,
        models, and reliable software.
      </p>
    </div>
    <Row className="g-4 skills-grid">
      {skillGroups.map((group, index) => (
        <Col key={group.title} xs={12} md={6} xl={4}>
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="h-100"
          >
            <Card className="skill-card h-100">
              <Card.Body>
                <div className="skill-card-top">
                  <span className="skill-number">{group.number}</span>
                  <span className="skill-icon" aria-hidden="true">
                    {group.icon}
                  </span>
                </div>
                <Card.Title>{group.title}</Card.Title>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Skills;
