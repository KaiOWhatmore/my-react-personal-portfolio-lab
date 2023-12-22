import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Reach Out to me!</h2>
      <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
      <div className="status">Open for opportunities: ✅</div>
      <div className="social-links">
        <a
          href="https://github.com/KaiOWhatmore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kai-%E2%98%95-whatmore-8273a2206"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:oscar1995@live.com.au">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
