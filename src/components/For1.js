import React, { useState } from 'react'

function For1(props) {
    const [main, setMain] = useState('N/A')
    const [desc, setDesc] = useState('N/A')
    const [long, setLong] = useState('N/A')
    const [lat, setLat] = useState('N/A')
    const [city, setCity] = useState('N/A')
    const [temp, setTemp] = useState('N/A')
    const [pres, setPres] = useState('N/A')
    const [hum, setHum] = useState('N/A')
    const [cloud, setCloud] = useState('N/A')
    const [vis, setVis] = useState('N/A')
    const [wind, setWind] = useState('N/A')
    const [ico, setIco] = useState('N/A')
    return (
        <div className="card-img-overlay" style={{ color: "black" ,position:'relative',height:'fit-content'}}>
        <h3 className="card-title">"bjhj"</h3>
        <div className="contain">
            <h4 className="card-title">{main ? main.toUpperCase() : ""}</h4>
            <img src={`https://openweathermap.org/img/wn/${ico}@2x.png`} alt="" />
        </div>
        <p className="card-text desc">{desc ? desc.toUpperCase() : ""}</p>
        <p className="card-text">CITY : {city ? city.toUpperCase() : ""}</p>
        <div className="contain2">
            <p className="card-text">TEMPERATURE : {temp} C</p>
            <p className="card-text">PRESSURE : {pres} hPa</p>
            <p className="card-text">HUMIDITY : {hum}%</p>
            <p className="card-text">CLOUDINESS : {cloud}%</p>
            <p className="card-text">WIND SPEED : {wind} m/s</p>
            <p className="card-text">VISBILITY : {vis} metres</p>
        </div>
    </div>
    )
}

export default For1