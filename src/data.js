import { leftDiv, wDetails } from './view';

const dateUpdate = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(new Date().toString());
  const dayName = days[d.getDay()];

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const [
    { value: month },,
    { value: day },,
    { value: year },
  ] = dateTimeFormat.formatToParts(d);
  return `${dayName}, ${month} ${day} '${year.substring(2)}`;
};

const init = (input, unit) => {
  const measurement = unit === 'metric' ? 'C' : 'F';
  const {
    main, weather, name, clouds, wind,
  } = input;
  const temperature = `${Math.round(main.temp)}\xB0${measurement}`;
  leftDiv(temperature, name, dateUpdate(), weather[0].main, weather[0].icon);
  wDetails(clouds.all, wind.speed, main.humidity);
};

export { init, dateUpdate };