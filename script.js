let is24HourFormat = false;

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (!is24HourFormat) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('time').textContent = 
      `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
  } else {
    document.getElementById('time').textContent = 
      `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }
}

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

setInterval(updateTime, 1000);

document.getElementById('toggleFormat').addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  document.getElementById('toggleFormat').textContent = 
    is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
});
