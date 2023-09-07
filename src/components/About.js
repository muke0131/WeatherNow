import React from 'react'
import bg from './weather.jpg'

const About = () => {
    return (
        <div className="card text-bg-dark">
            <img src={bg} className="card-img" alt={bg} />
            <div className="card-img-overlay" style={{ color: "black" }}>
                <h4 className="card-title">ABOUT WEATHERNOW</h4>
                <p className="card-text desc">WeatherNow is an application that gives the current weather of cities all over the globe.</p>
            </div>
        </div>
    )
}

export default About