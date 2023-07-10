import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" className="portfolio-image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/quarshie133/Netflix-Clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://react-netflix-clone-9f7bfd.netlify.app/login"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
