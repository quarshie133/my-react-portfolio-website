import React from "react";
import "./testimonials.css";

import { reviews } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          reviews.map()
        }
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
