import React from 'react';
import Typed from 'typed.js';

import { useEffect, useRef } from 'react';

const Data = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Salesforce Developer', 'Fontend Developer'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 200,
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 100,
            loop: true


        });

        // Destropying
        return () => {
            typed.destroy()
        };
    }, []);


    return (
        <>
            <div className="home__data">
                <h1 className="home__title">ANIKET KUMAR <span className="home__hand">🖐️</span></h1>
                <h3 className="home__subtitle">Computer Science Engineer</h3>
                <h4 className="home__subsubtitle"><span ref={el}></span></h4>
                <p className='home__description'>I'm creative for web design and salesforce based on my experience & skills, and I'm very passionate and dedicated to my work. </p>

                <a href="#contact" className='button button-flex'>
                    Say Hello <span className="home__smile">😊</span>
                </a>
            </div>
        </>
    )
}

export default Data