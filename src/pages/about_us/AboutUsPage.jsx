import React from 'react'
import AboutUs from '../../components/about_us/AboutUs'
import './AboutUsPage.scss'

const AboutUsPage = () => {
    return (
        <div className='AboutUsPage'>
            <div className="aboutus-header">
                 <h2>A propos</h2>
            </div>
            <AboutUs />
        </div>
    )
}

export default AboutUsPage