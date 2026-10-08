import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <motion.div
      className="home-section d-flex flex-column justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-content"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="hero-kicker mb-3">Hello, I am</div>
        <h1 className="hero-name hero-title">N i s h a</h1>
        <h2 className="hero-role">AI &amp; ML Engineer</h2>
        <p className="lead hero-subtitle">
          Python Developer | Data Science Enthusiast
        </p>
        <p className="mb-0">
          Third-year B.Tech Artificial Intelligence and Data Science student
        </p>
        <p>KGiSL Institute of Technology, Coimbatore</p>
      <motion.div
        className="mt-3"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button variant="primary" href="#projects" className="me-3">
          View Projects
        </Button>
        <Button
          variant="outline-light"
          href="/resume.pdf"
          download="Nisha-Muthurajan-Resume.pdf"
        >
          Download Resume
        </Button>
      </motion.div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        aria-hidden="true"
      >
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-node hero-node-center" />
        <span className="hero-node hero-node-top" />
        <span className="hero-node hero-node-side" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
