import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nret1k",
        "template_ow3u5h8",
        form.current,
        "CB9TjnM6JSnB0plKc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
     e.target.reset() 
  };

  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__options-icon" />
            <h4>Email</h4>
            <h5>luisdev9225@gmail.com</h5>
            <a href="mailto:luisdev9225@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <GrInstagram className="contact__options-icon" />
            <h4>Instagram</h4>
            <h5>luis_henrique_75</h5>
            <a
              href="https://www.instagram.com/luis_henrique_75/?hl=pt"
              target="_blank"
              rel="noreferrer"
            >
              Sigame no Instagram
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__options-icon" />
            <h4>WhatsApp</h4>
            <h5>55 75-981977227</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7581977227"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
