const tags = (tag) => document.createElement(tag);
const content = document.getElementById('content');
const left = tags('div');
const right = tags('div');
const tcity = tags('div');
const tempData = tags('div');
const cityDateDiv = tags('div');
const dateTag = tags('small');
const weatherDiv = tags('div');
const iconTag = tags('img');
const weatherText = tags('small');
const hr = tags('hr');
const weatherDetails = tags('div');
const detailsHead = tags('h2');
const humidity = tags('p');
const humidSpan = tags('span');
const wind = tags('p');
const windSpan = tags('span');
const cloud = tags('p');
const cloudSpan = tags('span');
const deg = tags('h1');
const form = tags('form');
const cityInput = tags('input');
const unit = tags('input');
const label = tags('label');
const slider = tags('span');
const submit = tags('button');
const inputGroup = tags('div');

tempData.className = 'tempdata';
left.className = 'left';
right.className = 'right';
cityDateDiv.className = 'citydate';
weatherDiv.className = 'citydate';
right.id = 'right';
label.className = 'switch';
unit.type = 'checkbox';
slider.className = 'slider round';
inputGroup.className = 'input-group';

[unit, slider].forEach((item) => label.appendChild(item));

[cityInput, label].forEach((item) => inputGroup.appendChild(item));
[inputGroup, submit].forEach((item) => form.appendChild(item));

form.id = 'city-form';
cityInput.id = 'city';
cityInput.type = 'text';
cityInput.placeholder = 'Enter city';
submit.type = 'submit';
submit.innerText = 'Search';

weatherDetails.className = 'w-details';
detailsHead.innerText = 'Weather Details';
humidity.innerText = 'Humidity';
wind.innerText = 'Wind';
cloud.innerText = 'Cloud';

export {
  content,
  left,
  right,
  tcity,
  tempData,
  cityDateDiv,
  dateTag,
  weatherDiv,
  iconTag,
  weatherText,
  hr,
  weatherDetails,
  detailsHead,
  humidity,
  humidSpan,
  wind,
  windSpan,
  cloud,
  cloudSpan,
  deg,
  form,
  cityInput,
  submit,
  unit,
};