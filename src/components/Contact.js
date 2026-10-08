import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaGithub,
  FaHackerrank,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl = `mailto:nishamuthurajan66@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <div className="section-container contact-section text-center">
      <div className="section-heading">
        <span className="section-eyebrow">Have an opportunity?</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>
      <p className="text-muted mb-4">
        Let's connect! Feel free to reach out for collaborations or opportunities.
      </p>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <a className="social-link" href="mailto:nishamuthurajan66@gmail.com" aria-label="Email">
          <FaEnvelope size={30} />
        </a>
      <a
        href="https://github.com/nisha-muthurajan"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="social-link"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/nisha-m-795ba9351?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="social-link"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://leetcode.com/u/nishamuthurajan/"
        target="_blank"
        rel="noreferrer"
        aria-label="LeetCode"
        className="social-link"
      >
        <SiLeetcode size={30} />
      </a>
      <a
        href="https://www.hackerrank.com/profile/Nisha_M2006"
        target="_blank"
        rel="noreferrer"
        aria-label="HackerRank"
        className="social-link"
      >
        <FaHackerrank size={30} />
      </a>
      </div>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            name="message"
            as="textarea"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
        {status && <p className="form-status mt-3">{status}</p>}
      </Form>
    </div>
  );
};

export default Contact;
