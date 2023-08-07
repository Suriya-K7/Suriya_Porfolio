import React, { useRef, useState } from 'react';
import "./contact.css";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from "@emailjs/browser";
import { ToastContainer, Flip, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vf9pvao', 'template_w7ynt0c', form.current, '7Oiuvv6FXhdHoWf0J')
      .then((result) => {
        toast.success("Wow so easy, thank for contacting!");
        setEmail('');
        setMessage('');
        setUserName('');
        setSubject('');
        console.log(result);
      }, (error) => {
        toast.error("Server error Please try again later!");
        console.log(error);
      });
  };

  return (
    <section className='contact section'>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't be Shy !
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunities to be part of your vision.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className='info__icon' />
              <div>
                <span className='info__title'>
                  Mail Me
                </span>
                <h4 className="info__desc">
                  usraising@gmail.com
                </h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>
                  Call Me
                </span>
                <h4 className="info__desc">
                  +91-7639718893
                </h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/usraising" className="contact__social-link"
              target='_blank'
            >
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com/in/suriya-kesavamurthy-50616825a" className="contact__social-link"
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/suriya-k7" className="contact__social-link"
              target='_blank'
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text"
                placeholder='Your Name'
                className='form__control'
                name='from_name'
                value={userName}
                onChange={() => setUserName(e.target.value)}
              />
            </div>
            <div className="form__input-div">
              <input type="email"
                placeholder='Your Email'
                className='form__control'
                name='from_email'
                value={email}
                onChange={() => setEmail(e.target.value)}
              />
            </div>
            <div className="form__input-div">
              <input type="text"
                placeholder='Your Subject'
                className='form__control'
                name='from_subject'
                value={subject}
                onChange={() => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={() => setMessage(e.target.value)}
              className="form__control textarea"></textarea>
          </div>
          <button type='submit' className="button">
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Flip}
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </section>
  )
}

export default Contact;