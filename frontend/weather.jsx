import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: null
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location){
    let request = new XMLHttpRequest();
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=6e02288ced6790e81d0d9744d67d6dcf`
    
    
    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(request.responseText);
        this.setState({ weather: data });
      } 
    };
    request.open('GET', url, true);
    request.send();
  }



  render() {
    let content;
    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    } else {
      content = <div>Waiting...</div>
    }
    return (
      <>
        <div className="all-weather">
          <h1 className="taw-title">Weather</h1>
          <div className="weather-container">
            {content}
          </div>
        </div>
      </>
    )
  }
}

export default Weather;
