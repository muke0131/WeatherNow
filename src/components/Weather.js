import React, { useState } from 'react'
import bg from './weather.jpg'

function Weather() {
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

    const Current_weather = async () => {
        let x = document.getElementById('inputCity').value ? document.getElementById('inputCity').value:"New York";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=5ea7d4f08c6f2a1af3e49ff11fdca00d&units=metric`;
        let response = await fetch(url);
        let jsonResponse = await response.json();
        if (jsonResponse.cod === "404") {
            alert('Enter a Valid City Name');
        }
        else{
            setMain(jsonResponse.weather[0].main)
            setLong(jsonResponse.coord.lon)
            setLat(jsonResponse.coord.lat)
            setCity(jsonResponse.name)
            setTemp(jsonResponse.main.temp)
            setPres(jsonResponse.main.pressure)
            setHum(jsonResponse.main.humidity)
            setCloud(jsonResponse.clouds.all)
            setVis(jsonResponse.visibility)
            setWind(jsonResponse.wind.speed)
            setDesc(jsonResponse.weather[0].description)
            setIco(jsonResponse.weather[0].icon)
        }
    }

    Current_weather();
    return (
        <div className="card text-bg-dark">
            <img src={bg} className="card-img" alt={bg} />
            <div className="card-img-overlay" style={{ color: "black" }}>
                <h3 className="card-title">CURRENT WEATHER</h3>
                <div className="search">
                    <input type="text" className="form-control" id="inputCity" placeholder="ENTER CITY NAME" />
                    <button type="submit" className="btn btn-primary mb-3" onClick={Current_weather}>Search</button>
                </div>
                <div className="contain">
                    <h4 className="card-title">{main ? main.toUpperCase() : ""}</h4>
                    <img src={`https://openweathermap.org/img/wn/${ico}@2x.png`} alt="" />
                </div>
                <p className="card-text desc">{desc ? desc.toUpperCase() : ""}</p>
                <p className="card-text">CITY : {city ? city.toUpperCase() : ""}</p>
                <div className="contain2">
                    <p className="card-text">LONGTITUDE : {lat}</p>
                    <p className="card-text">LATITUDE : {long}</p>
                    {/* <p className="card-text"><small>Time:</small></p> */}
                    <p className="card-text">TEMPERATURE : {temp} C</p>
                    <p className="card-text">PRESSURE : {pres} hPa</p>
                    <p className="card-text">HUMIDITY : {hum}%</p>
                    <p className="card-text">CLOUDINESS : {cloud}%</p>
                    <p className="card-text">WIND SPEED : {wind} m/s</p>
                    <p className="card-text">VISBILITY : {vis} metres</p>
                </div>
            </div>
        </div>
    )
}

export default Weather