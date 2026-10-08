import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge, Button, Card, Col, Modal, Row } from "react-bootstrap";

const projects = [
  {
    title: "EcoSort / EcoVision",
    summary: "AI-powered computer vision for smart waste detection and segregation.",
    problem:
      "Manual waste segregation is time-consuming and can lead to incorrect classification of recyclable and non-recyclable waste.",
    solution:
      "An AI-powered smart waste segregation system that uses computer vision to detect and classify waste and supports automated physical segregation.",
    role: "AI/ML Developer",
    technologies: [
      "Python",
      "YOLOv8",
      "Computer Vision",
      "Flask",
      "HTML",
      "CSS",
      "ESP32-CAM",
      "Sensors",
      "Servo Motor",
      "SQLite",
      "Firebase",
    ],
    features: [
      "AI-based waste detection using YOLOv8",
      "Real-time computer vision processing",
      "Automated waste segregation",
      "ESP32-CAM integration",
      "Sensor and servo-based hardware control",
      "Web-based interface using Flask",
      "Data storage using SQLite/Firebase",
    ],
    github: "https://github.com/Vijesh-CDmaster/EcoSort-Vision",
  },
  {
    title: "Verya AI",
    subtitle: "Agentic AI for Sustainable Perishable Inventory Management",
    summary: "Agentic AI decision support for reducing perishable inventory waste.",
    problem:
      "Retail stores can lose money through product stockouts and excess perishable inventory that expires before it is sold.",
    solution:
      "An agentic AI decision-support system designed to analyze sales, inventory, pricing, promotions, shelf life, waste, weather, and local-event information to recommend appropriate inventory actions.",
    role: "AI/ML Developer",
    technologies: [
      "Python",
      "Machine Learning",
      "Agentic AI",
      "Data Analytics",
      "Demand Forecasting",
    ],
    features: [
      "Short-term demand forecasting",
      "Inventory analysis",
      "Spoilage and freshness risk assessment",
      "Stockout and excess-stock detection",
      "AI-driven inventory recommendations",
      "Multi-agent decision support",
      "Explainable recommendations",
      "Recommended actions such as reorder, transfer, markdown, donate, or no action",
    ],
    github: "https://github.com/nisha-muthurajan/verya-model-training",
  },
  {
    title: "Patient Dropout Detection",
    summary:
      "An ML-powered healthcare solution that predicts patients at risk of dropping out of treatment or follow-up.",
    problem:
      "Patients may discontinue or miss their treatment or follow-up process due to various factors, making it difficult for healthcare providers to identify patients who are at risk of dropping out of care.",
    solution:
      "A machine-learning-based system designed to identify patients who may be at risk of dropping out of their treatment or follow-up process. The system analyzes relevant patient-related factors and provides risk predictions that can help healthcare professionals take preventive actions and improve patient retention.",
    role: "AI/ML Developer",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Data Visualization",
    ],
    features: [
      "Patient data preprocessing and cleaning",
      "Exploratory data analysis and visualization",
      "Feature selection and preparation",
      "Machine-learning-based dropout risk prediction",
      "Model evaluation and performance analysis",
      "Risk-based insights to support early intervention",
    ],
    github: "https://github.com/nisha-muthurajan/SilentCare-AI-",
  },
  {
    title: "Farmer Marketplace",
    summary: "A digital marketplace connecting farmers directly with customers.",
    problem:
      "Farmers can face difficulties in reaching customers directly and receiving fair value for their agricultural products due to dependency on intermediaries.",
    solution:
      "A digital platform designed to connect farmers directly with customers, making it easier to list, discover, and purchase agricultural products.",
    role: "Full-Stack / AI Developer",
    technologies: ["Django", "Bootstrap", "SQLite"],
    features: [
      "Farmer product listing",
      "Product browsing and search",
      "Direct farmer-to-customer interaction",
      "Product information management",
      "User-friendly marketplace interface",
      "Digital access to agricultural products",
    ],
    github: "",
  },
  {
    title: "AI Virtual Patient",
    summary: "An interactive AI simulation for practicing patient conversations and clinical reasoning.",
    problem:
      "Medical and healthcare learners need opportunities to practice patient interaction, clinical reasoning, and decision-making in realistic but controlled environments.",
    solution:
      "An AI-based simulation concept that provides an interactive virtual patient experience, allowing users to interact with a simulated patient and practice clinical reasoning.",
    role: "AI/ML Developer",
    technologies: ["React", "Django", "NLP"],
    features: [
      "AI-powered patient interaction",
      "Interactive conversation",
      "Simulated patient responses",
      "Scenario-based learning",
      "Patient information handling",
      "Interactive clinical practice environment",
    ],
    github: "https://github.com/nisha-muthurajan/patient-app",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="section-container projects-section">
      <div className="section-heading">
        <span className="section-eyebrow">Selected work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">
          Practical AI, machine learning, and software projects built to solve
          meaningful problems.
        </p>
      </div>
      <Row className="g-4 mt-2">
        {projects.map((project, index) => (
          <Col key={project.title} xs={12} md={6} xl={4}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="h-100"
            >
              <Card className="h-100 shadow-sm border-0 project-card project-preview">
                <Card.Body className="d-flex flex-column">
                  <div className="project-index">0{index + 1}</div>
                  <Card.Title className="fw-bold text-primary">
                    {project.title}
                  </Card.Title>
                  {project.subtitle && (
                    <Card.Subtitle className="mb-3 text-muted">
                      {project.subtitle}
                    </Card.Subtitle>
                  )}
                  <Card.Text className="project-summary">
                    {project.summary}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-2 project-preview-tags">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <Badge bg="light" text="dark" key={technology}>
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline-light"
                    className="see-more-button mt-auto"
                    onClick={() => setSelectedProject(project)}
                  >
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal
        show={Boolean(selectedProject)}
        onHide={() => setSelectedProject(null)}
        centered
        size="lg"
        className="project-modal"
        aria-labelledby="project-modal-title"
      >
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Modal.Header closeButton>
              <Modal.Title id="project-modal-title">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProject.subtitle && (
                <p className="project-modal-subtitle">
                  {selectedProject.subtitle}
                </p>
              )}
              <p>
                <strong>Problem:</strong> {selectedProject.problem}
              </p>
              <p>
                <strong>Solution:</strong> {selectedProject.solution}
              </p>
              <p>
                <strong>My Role:</strong> {selectedProject.role}
              </p>
              <div className="mb-3">
                <strong>Technologies</strong>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {selectedProject.technologies.map((technology) => (
                    <Badge bg="light" text="dark" key={technology}>
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <strong>Key Features</strong>
                <ul className="mt-2 ps-3">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-light" onClick={() => setSelectedProject(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                href={selectedProject.github || undefined}
                target={selectedProject.github ? "_blank" : undefined}
                rel={selectedProject.github ? "noreferrer" : undefined}
                disabled={!selectedProject.github}
              >
                {selectedProject.github ? "View on GitHub" : "GitHub link unavailable"}
              </Button>
            </Modal.Footer>
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
