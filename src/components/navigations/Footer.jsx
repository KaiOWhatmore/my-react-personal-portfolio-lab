import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Exp</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>

        <ul className="social">
          <li>
            <a href="https://github.com/KaiOWhatmore">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kai-%E2%98%95-whatmore-8273a2206">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:oscar1995@live.com.au">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>

        <p>&copy; Kai Whatmore. Always curious, always learning</p>
      </div>
    </footer>
  );
}

export default Footer;
