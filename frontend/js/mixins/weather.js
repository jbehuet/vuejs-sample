var weather = {
  currentWeather: function(){
       return Vue.http.get('http://api.openweathermap.org/data/2.5/weather?q=La%20loupe&units=metric&appid=2de143494c0b295cca9337e1e96b00e0');
  }
};

module.exports = weather;