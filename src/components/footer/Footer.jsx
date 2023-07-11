import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Prince Ephraim Quarshie
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://web.facebook.com/prince.wrightsquarshie"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/prince-ephraim-quarshie/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/quarshie133" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
