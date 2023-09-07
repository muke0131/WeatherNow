import React from 'react'
import For1 from './For1'
// import bg from './weather.jpg'

function Forecast() {
  let list = []
  const Forecast_Weather = async () => {
    let x = document.getElementById('inputCity').value ? document.getElementById('inputCity').value : "New York";
    let url = `http://api.weatherapi.com/v1/forecast.json?key=fd2737c22173471f850134128230104&q=${x}&days=7`;
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    list=[];
    for (let i = 0; i < 7; i++) {
      list.push(<For1 key={i}/>);
    }
    console.log(list);
}
return (
  <div className="card items" style={{ backgroundColor: 'unset' }}>
    {/* <img src={bg} className="card-img" alt={bg} style={{ position: 'absolute' }} /> */}
    <div className="search2">
      <input type="text" className="form-control" id="inputCity" placeholder="ENTER CITY NAME"/>
      <button type="submit" className="btn btn-primary mb-3" onClick={Forecast_Weather}>Search</button>
    </div>
    <div className="forecast">
      {list}
    </div>
  </div>
)
}

export default Forecast