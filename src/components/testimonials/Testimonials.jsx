import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avartar One" />
          </div>
          <h5 className="client__name">Mark Oppong</h5>
          <small className="cleint__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            corrupti, expedita nisi sapiente perferendis vero? Dicta nulla nemo
            consequatur cum sunt sequi cumque aspernatur quae? Eligendi
            dignissimos laudantium soluta. Adipisci?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avartar One" />
          </div>
          <h5 className="client__name">Mark Oppong</h5>
          <small className="cleint__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            corrupti, expedita nisi sapiente perferendis vero? Dicta nulla nemo
            consequatur cum sunt sequi cumque aspernatur quae? Eligendi
            dignissimos laudantium soluta. Adipisci?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avartar One" />
          </div>
          <h5 className="client__name">Mark Oppong</h5>
          <small className="cleint__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            corrupti, expedita nisi sapiente perferendis vero? Dicta nulla nemo
            consequatur cum sunt sequi cumque aspernatur quae? Eligendi
            dignissimos laudantium soluta. Adipisci?
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
