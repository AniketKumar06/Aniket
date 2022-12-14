import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.webp";
import Info from "./Info";

const About = () => {
    return (
        <>
            <section className="about__section" id="about">
                <h2 className="section__title text__shadow">
                    About Me
                </h2>
                <span className="section__subtitle">My Introduction</span>

                <div className="about__container  container grid">
                    <img src={AboutImg} alt="" className="about__img" />
                    <div className="about__data">
                        <div className="about__info">
                            <p className="about__description">
                                <span className="firstLetter">h</span>i,
                                I am Aniket Kumar as a Fontend Developer & Salesforce Developer.
                                I have created web pages with UI / UX user interface, Seeking opportunity to utilize my
                                innovative skills and sincere hard work for the growth of Knowledge and Skills.
                            </p>
                            <Info />
                            <a
                                download=" " target=' '
                                href="https://drive.google.com/drive/folders/1AZmUxuNwLlbzu2dqZGvtbGH8aYgY-DNL?usp=share_link"
                                className="button button--flex " rel="noreferrer">
                                Download CV
                                <svg
                                    className="arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.575-2.025 2.138-3.4Q8.95 4.375 11 4.075v8.075L9.4 10.6L8 12l4 4l4-4l-1.4-1.4l-1.6 1.55V4.075q2.575.35 4.288 2.312Q19 8.35 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
