import Weather from './weather';
import './styles/main.scss';
import { left, right, content } from './view';
import {
  form, cityInput, unit, slider,
} from './util';

const checkWeather = (item = 'Kisumu', units = 'metric') => new Weather(item, units);

const getTown = () => {
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(res => checkWeather(res.city).getWeather());
};

getTown();

[left, right].forEach((item) => content.appendChild(item));

let city = '';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tempUnit = unit.checked ? 'imperial' : 'metric';
  city = cityInput.value;
  checkWeather(city, tempUnit).getWeather();
  form.reset();
});
slider.addEventListener('click', () => {
  const tempUnit = unit.checked ? 'imperial' : 'metric';
  checkWeather(city, tempUnit).getWeather();
});
