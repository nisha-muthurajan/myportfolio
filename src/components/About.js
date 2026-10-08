import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="section-container">
      <div className="section-heading">
        <span className="section-eyebrow">A little about me</span>
        <h2 className="section-title">About Me</h2>
      </div>
      <motion.div
        className="about-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <motion.div
          className="about-mark"
          aria-hidden="true"
          initial={{ scale: 0.7, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, type: "spring" }}
        >
          N
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <p className="about-copy">
            I am a third-year B.Tech Artificial Intelligence and Data Science
            student at KGiSL Institute of Technology, Coimbatore. I am
            passionate about Artificial Intelligence, Machine Learning,
            Computer Vision, Data Science, and software development.
          </p>
          <p className="about-copy">
            I enjoy building practical AI-based projects and continuously
            improving my programming, problem-solving, and Data Structures and
            Algorithms skills.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
