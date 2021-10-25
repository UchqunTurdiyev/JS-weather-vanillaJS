const api ={
    key: "a49f0b80330f2c1708656fcedea4e457",
    baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector('.search_box');


  searchBox.addEventListener('keypress', setQuery);

  function setQuery (e) {
      if(e.keyCode == 13) {
        getResult(searchBox.value);
          console.log(searchBox.value);
      }
  }

  function getResult(query){
      fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather =>{
          return weather.json();
      }).then(displayResults);
  }

  function displayResults(weather) {
      console.log(weather);
      let city = document.querySelector('.location .city');
      city.innerHTML = `${weather.name}, ${weather.sys.country}`;

      let now = new Date();
      let date = document.querySelector('.location .date');
      date.innerHTML = dateBuilder (now);

      let temp = document.querySelector('.temprature')

      temp.innerHTML = `${Math.round(weather.main.temp)} <span> °C</span>`;

      let weatherEl = document.querySelector('.weather');
      weatherEl.innerHTML = weather.weather[0].main;

      let hilow = document.querySelector('.hi_low');
      hilow.innerHTML = `${Math.round(weather.main.temp_min) }°C / ${Math.round(weather.main.temp_max) }°C`;
  }



  function dateBuilder (u){
      let month = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];
      let days = ['Dushanba','Seshanba', 'Chorshanba','Payshanba','Juma','Shanba','Yakshanba'];

      let day = days[u.getDay()];
      let date = u.getDate();
      let months = month[u.getMonth ()];
      let years = u.getFullYear();

      return `${day} ${date} ${months} ${years}`;

  }
