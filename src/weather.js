/* eslint-disable no-alert */
import { init } from './data';

class Weather {
  constructor(location, unit) {
    this.location = location;
    this.unit = unit;
  }

  getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.unit}&appid=b8bb1a362f05a8f7c8e8175617da6b69`)
      .then((res) => (!res.ok ? window.alert('Location not found') : res))
      .then((res) => res.json())
      .then((res) => init(res, this.unit))
      .catch((err) => err.message);
  }
}

export default Weather;