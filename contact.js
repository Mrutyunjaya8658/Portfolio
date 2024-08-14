import React, { useRef } from 'react';
import './contact.css';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import twit from '../assets/twitter.png';
import git from '../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gsyxgia', 'template_flzujyv', form.current, {
        publicKey: 'Db2VTprZs7CpJghAk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your name' name='your_name' autocomplete="off" required="required"/>
                <input type="email" className="Email" placeholder='email' name='your_Email' autocomplete="off" required="required" />
                <textarea className='msg' name="messsage" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebook} alt="" className="Link" />
                    <img src={insta} alt="" className="Link" />
                    <img src={twit} alt="" className="Link" />
                    <img src={git} alt="" className="Link" />
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact