import React from 'react';

const Info = () => {
    return (
        <>
            <div className='about__info grid'>
                <div className='about__box'>
                    <i class="bx bx-award about-icon"></i>
                    <h3 className='about_title'>Exerience</h3>
                    <span className='about__subtitle'>0.6 Years Working</span>
                </div>

                <div className='about__box'>
                    <i class="bx bx-briefcase-alt about-icon"></i>
                    <h3 className='about_title'>Projects</h3>
                    <span className='about__subtitle'>10+ Projects</span>
                </div>
                <div className='about__box'>
                    <i class="bx bx-support about-icon"></i>
                    <h3 className='about_title'>Support</h3>
                    <span className='about__subtitle'>Online 24/7</span>
                </div>
            </div>
        </>
    )
}

export default Info
