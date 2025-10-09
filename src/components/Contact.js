import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <div className="section-container text-center">
    <h2 className="section-title">Contact</h2>
    <p className="text-muted mb-4">
      Let's connect! Feel free to reach out for collaborations or opportunities.
    </p>
    <div className="d-flex justify-content-center gap-3 mb-4">
      <a href="mailto:yourmail@gmail.com">
        <FaEnvelope size={30} />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://linkedin.com/in/yourlinkedin"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
    <Form className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Control type="email" placeholder="Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Control as="textarea" rows={3} placeholder="Your Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  </div>
);

export default Contact;
