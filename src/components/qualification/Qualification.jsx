import React from 'react'
import Education01 from './Education01';
import Education02 from './Education02';
import Education03 from './Education03';
import './qualification.css';
const Qualification = () => {
    return (
        <>
            <section className="qualification__container" id="qualification">
                <h2 className='section__title text__shadow'>Qualification</h2>
                <span className='section__subtitle'>My Academic History</span>
                <div className='qualification__container container grid'>
                    <Education01 />
                    <Education02 />
                    <Education03 />
                </div>
            </section>
        </>
    )
}

export default Qualification
