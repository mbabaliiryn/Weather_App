import apiFunctions from './components/apiCall';
import { imgController } from './components/passINFO';
import { handleDegreeClick, changeDegree, selectedTemp } from './components/degreeChange';
import handleDate from './components/handleDate';

// gets an initial call to fill the page on load
apiFunctions.newCall('initial call');

// disables celsius button as it is the default option
document.getElementById('celsius').style.pointerEvents = 'none';
document.getElementById('fahrenheit').style.background = 'linear-gradient(to bottom, #000000 5%, #a34b59 100%)';
imgController();
handleDegreeClick();
changeDegree();
selectedTemp();
handleDate();
