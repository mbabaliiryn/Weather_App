/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import handleDate from './handleDate';
import { passINFO, imgController } from './passINFO';
import { handleDegreeClick } from './degreeChange';

const apiFunctions = (() => {
  // starts the api call process
  async function newCall(location) {
    // sets London as initial city to search and adds listeners to appropriate buttons
    if (location === 'initial call') {
      location = 'London';
      addListeners();
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=b0724c24118141e549b0048fcae7ce4d`,
        { mode: 'cors' },
      );

      handleInfo(await response.json());
    } catch (error) {
      alert('Wrong Search spelling.');
    }
  }

  // takes response.json() data and adds it to an object info
  const handleInfo = newData => {
    const info = {};
    info.currentTemp = (parseFloat(newData.main.temp) - 273.15).toFixed(1);
    info.weatherStatus = newData.weather[0].main;
    info.weatherDescription = newData.weather[0].description;

    handleDate(info);
    info.location = `${newData.name}, ${newData.sys.country}`;

    info.tempHigh = (parseFloat(newData.main.temp_max) - 273.15).toFixed(1);
    info.tempLow = (parseFloat(newData.main.temp_min) - 273.15).toFixed(1);

    info.humidity = newData.main.humidity;
    info.wind = newData.wind.speed;

    passINFO(info);
  };

  // used to trigger a search if enter is pressed while in search textbox
  const checkKeyDown = e => {
    if (e.keyCode === 13) document.getElementById('searchButton').click();
  };

  const addListeners = () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      newCall(document.getElementById('searchBox').value);
    });

    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keydown', checkKeyDown);

    const fahrenheitButton = document.getElementById('fahrenheit');
    const celsiusButton = document.getElementById('celsius');

    fahrenheitButton.addEventListener('click', handleDegreeClick);
    celsiusButton.addEventListener('click', handleDegreeClick);
  };

  return {
    newCall,
  };
})();
imgController();

export default apiFunctions;