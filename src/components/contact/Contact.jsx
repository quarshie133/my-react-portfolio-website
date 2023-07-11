import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>wrightsprince@gmail.com</h5>
            <a href="mailto:wrightsprince@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Prince Wrights Quarshie</h5>
            <a href="https://m.me/prince.wrightsquarshie" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+233272515799"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />

          <input type="email" placeholder="Your Email" required />
          <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
        </form>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </section>
  );
}; 

export default Contact;
