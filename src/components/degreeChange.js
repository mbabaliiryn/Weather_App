/* eslint-disable no-use-before-define */
/* eslint-disable no-const-assign */
const selectedTemp = 'C';

const handleDegreeClick = e => {
  if (e.target.id === 'fahrenheit') {
    selectedTemp = 'F';
  } else {
    selectedTemp = 'C';
  }
  changeDegree();
};

const changeDegree = () => {
  const a = document.getElementById('currentTemp');
  const b = document.getElementById('tempHighText');
  const c = document.getElementById('tempLowText');
  const array = [a, b, c];

  const fButton = document.getElementById('fahrenheit');
  const cButton = document.getElementById('celsius');

  if (selectedTemp === 'F') {
    array.forEach(ele => {
      let temp = ele.innerHTML.slice(0, -3);
      temp = parseFloat((temp * 9) / 5 + 32).toFixed(1);
      ele.innerHTML = `${temp}° F`;
    });
    fButton.style.background = 'linear-gradient(to bottom, #fc4b69 5%, #a34b59 100%)';

    cButton.style.background = 'linear-gradient(to bottom, #000000 5%, #a34b59 100%)';
    fButton.style.pointerEvents = 'none';
    cButton.style.pointerEvents = 'auto';
  } else {
    array.forEach(ele => {
      let temp = ele.innerHTML.slice(0, -3);
      temp = parseFloat(((temp - 32) * 5) / 9).toFixed(1);
      ele.innerHTML = `${temp}° C`;
    });

    cButton.style.background = 'linear-gradient(to bottom, #fc4b69 5%, #a34b59 100%)';

    fButton.style.background = 'linear-gradient(to bottom, #000000 5%, #a34b59 100%)';
    fButton.style.pointerEvents = 'auto';
    cButton.style.pointerEvents = 'none';
  }
};

export { handleDegreeClick, changeDegree, selectedTemp };