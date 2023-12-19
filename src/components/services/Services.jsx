import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Front-End (Delivering seamless user interfaces with expertise in
                front-end development.)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management Systems (Wordpress, Joomla)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Application Development (React Native)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
