/* eslint-disable no-use-before-define */
const handleDate = info => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();

  info.day = weekdays[day];
  info.date = `${months[month]} ${handleDateEnding(today.getDate())}`;
};

const handleDateEnding = num => {
  let n = num.toString().substr(-1);

  if (n === '1' && num !== 11) {
    n = 'st';
  } else if (n === '2' && num !== 12) {
    n = 'nd';
  } else if (n === '3' && num !== 13) {
    n = 'rd';
  } else {
    n = 'th';
  }

  return num.toString() + n;
};

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
export default handleDate;
