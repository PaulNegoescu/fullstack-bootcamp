// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(42), 2000);
// });

// myPromise
//   .then((data) => data + data)
//   .then(console.log);

const apiKey = import.meta.env.VITE_OWM_API_KEY;
const location = 'Brasov,RO';

await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
  .then((res) => res.json())
  .then(displayWeatherData);

function displayWeatherData(data) {
  const sinks = document.querySelectorAll('[data-weather]');

  for(const sink of sinks) {
    const path = sink.dataset.weather;
    const parts = path.split('.');

    const toDisplay = getData(parts, data);
    sink.textContent = toDisplay;
  }
}

function getData(pathAsArray, obj) {
  let val = obj;
  for(const part of pathAsArray) {
    val = val[part];
  }

  return val;
}

