import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7jmg7sb', 'template_22lrtix', form.current, 'dbAoTfgJQ8liuhSYU')
        e.target.reset()
    };

    return (
        <section className="contact__section" id="contact" >
            <h2 className="section__title text__shadow">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">Aniketcse4158@gmail.com</span>
                            <a href="mailto:Aniketcse4158@gmail.com" className="contact__button">Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">7979995313</span>
                            <a href="https://api.whatsapp.com/send?phone=7979995313&text=Hello, Aniket Kumar! would you please connect to 
                            me. " className="contact__button">Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>


                    </div>

                </div>

                <div className="contact__content">
                    <h3 className="contact__title">
                        Write Message
                    </h3>
                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">
                                Name
                            </label>
                            <input name='name' type="text" className="contact__form-input" placeholder="Your Name" />

                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">
                                Email
                            </label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Your Email" />

                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag ">
                                Message
                            </label>
                            <textarea name="message" className="contact__form-input  " cols="30" rows="10" placeholder=" Your Message....." />
                        </div>


                        <button className='button button-flex'>
                            Send Message <span className="home__smile">😊</span>
                        </button>
                    </form>

                </div>


            </div>
        </section>

    )
}

export default Contact
