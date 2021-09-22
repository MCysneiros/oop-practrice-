const intervalId = setInterval(
  () => console.log('sending analytics data'),
  3000
);
document
  .getElementById('stop-analytics')
  .addEventListener('click', () => clearInterval(intervalId));
