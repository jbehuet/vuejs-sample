var weather = {
    
  currentWeather: function(){
       return Vue.http.get('http://api.openweathermap.org/data/2.5/weather?q=La%20loupe&units=metric&appid=44db6a862fba0b067b1930da0d769e98');
  }
    
};

module.exports = weather;