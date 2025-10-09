import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <motion.div
      className="home-section d-flex flex-column align-items-center justify-content-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="display-4 fw-bold">Hi, I'm Nisha.M</h1>
      <p className="lead text-muted">AI & Data Science Enthusiast</p>
      <div className="mt-3">
        <Button variant="primary" href="#projects" className="me-3">
          View Projects
        </Button>
        <Button variant="outline-light" href="/resume.pdf" target="_blank">
          Download Resume
        </Button>
      </div>
    </motion.div>
  );
};

export default Home;
