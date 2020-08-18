/* eslint-disable no-use-before-define */

import { selectedTemp, changeDegree } from './degreeChange';

const passINFO = info => {
  // takes value from info object and passes them to display
  document.getElementById('currentTemp').innerHTML = `${info.currentTemp}° C`;
  document.getElementById('weatherStatus').innerHTML = info.weatherDescription;
  document.getElementById('dayDiv').innerHTML = info.day;
  document.getElementById('dateDiv').innerHTML = info.date;
  document.getElementById('location').innerHTML = info.location;
  document.getElementById('tempHighText').innerHTML = `${info.tempHigh}° C`;
  document.getElementById('tempLowText').innerHTML = `${info.tempLow}° C`;
  document.getElementById('humidityText').innerHTML = `${info.humidity}%`;
  document.getElementById('windText').innerHTML = `${info.wind}mph`;
  imgController(info.weatherDescription);

  // data is converted to celcius on call. checks on new call for Farenheit button selected.
  // If true, swaps displayed temp type.
  if (selectedTemp === 'F') {
    changeDegree();
  }
};

// adjusts weather icon  based on the text in the weather description
const imgController = status => {
  const icon = document.getElementById('weatherGraphic');

  if (status.indexOf('clear') >= 0 || status.indexOf('Clear') >= 0) {
    icon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
  }

  if (status.indexOf('cloud') >= 0 || status.indexOf('Cloud') >= 0) {
    icon.src = 'https://openweathermap.org/img/wn/04d@2x.png';
  }

  if (status.indexOf('rain') >= 0 || status.indexOf('Rain') >= 0) {
    if (status.indexOf('thunder') >= 0 || status.indexOf('Thunder') >= 0) {
      icon.src = 'https://openweathermap.org/img/wn/11n@2x.png';
    } else {
      icon.src = 'https://openweathermap.org/img/wn/10n@2x.png';
    }
  }

  if (status.indexOf('snow') >= 0 || status.indexOf('Snow') >= 0) {
    icon.src = 'https://openweathermap.org/img/wn/13d@2x.png';
  }
};

export { passINFO, imgController };