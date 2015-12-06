(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jbe/Documents/Projets/vuejs/frontend/js/app.js":[function(require,module,exports){
var notFound = require('./components/404.js');
var home = require('./components/home.js');
var about = require('./components/about.js');

var App = Vue.extend({});

// Router options
var router = new VueRouter({
   history: false,
   root: '/'
});

// Router map for defining components
router.map({
   // For Not Found template
   '*': {
      component: notFound
   },

   '/': {
      component: home
   },

   '/about': {
      component: about
   }
});

router.start(App, '#app');
},{"./components/404.js":"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/404.js","./components/about.js":"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/about.js","./components/home.js":"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/home.js"}],"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/404.js":[function(require,module,exports){
var notFound = Vue.extend({
   template: '<h1>Not Found</h1>'
});


module.exports = notFound;
},{}],"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/about.js":[function(require,module,exports){
var about = Vue.extend({ 
    template: '<h1>About</h1>' 
});


module.exports = about;
},{}],"/Users/jbe/Documents/Projets/vuejs/frontend/js/components/home.js":[function(require,module,exports){
var weather = require('../mixins/weather');

var home = Vue.extend({
    mixins: [weather],
    template: '<h1>Météo de La Loupe</h1>' +
        '<img v-bind:src="weather.icon">' +
        '{{ weather.main.temp }} °C',
    data: function () {
        return {
            weather: {},
            icon: ''
        }
    },
    methods: {},
    ready: function () {
        weather.currentWeather().success(function (data) {
            this.weather = data;
            this.weather.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        }.bind(this)).error(function (data, status, request) {
            // handle error
        });
    }
});


module.exports = home;

},{"../mixins/weather":"/Users/jbe/Documents/Projets/vuejs/frontend/js/mixins/weather.js"}],"/Users/jbe/Documents/Projets/vuejs/frontend/js/mixins/weather.js":[function(require,module,exports){
var weather = {
  currentWeather: function(){
       return Vue.http.get('http://api.openweathermap.org/data/2.5/weather?q=La%20loupe&units=metric&appid=2de143494c0b295cca9337e1e96b00e0');
  }
};

module.exports = weather;
},{}]},{},["/Users/jbe/Documents/Projets/vuejs/frontend/js/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9jb21wb25lbnRzLzQwNC5qcyIsImpzL2NvbXBvbmVudHMvYWJvdXQuanMiLCJqcy9jb21wb25lbnRzL2hvbWUuanMiLCJqcy9taXhpbnMvd2VhdGhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbm90Rm91bmQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvNDA0LmpzJyk7XG52YXIgaG9tZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ob21lLmpzJyk7XG52YXIgYWJvdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYWJvdXQuanMnKTtcblxudmFyIEFwcCA9IFZ1ZS5leHRlbmQoe30pO1xuXG4vLyBSb3V0ZXIgb3B0aW9uc1xudmFyIHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgaGlzdG9yeTogZmFsc2UsXG4gICByb290OiAnLydcbn0pO1xuXG4vLyBSb3V0ZXIgbWFwIGZvciBkZWZpbmluZyBjb21wb25lbnRzXG5yb3V0ZXIubWFwKHtcbiAgIC8vIEZvciBOb3QgRm91bmQgdGVtcGxhdGVcbiAgICcqJzoge1xuICAgICAgY29tcG9uZW50OiBub3RGb3VuZFxuICAgfSxcblxuICAgJy8nOiB7XG4gICAgICBjb21wb25lbnQ6IGhvbWVcbiAgIH0sXG5cbiAgICcvYWJvdXQnOiB7XG4gICAgICBjb21wb25lbnQ6IGFib3V0XG4gICB9XG59KTtcblxucm91dGVyLnN0YXJ0KEFwcCwgJyNhcHAnKTsiLCJ2YXIgbm90Rm91bmQgPSBWdWUuZXh0ZW5kKHtcbiAgIHRlbXBsYXRlOiAnPGgxPk5vdCBGb3VuZDwvaDE+J1xufSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBub3RGb3VuZDsiLCJ2YXIgYWJvdXQgPSBWdWUuZXh0ZW5kKHsgXG4gICAgdGVtcGxhdGU6ICc8aDE+QWJvdXQ8L2gxPicgXG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFib3V0OyIsInZhciB3ZWF0aGVyID0gcmVxdWlyZSgnLi4vbWl4aW5zL3dlYXRoZXInKTtcblxudmFyIGhvbWUgPSBWdWUuZXh0ZW5kKHtcbiAgICBtaXhpbnM6IFt3ZWF0aGVyXSxcbiAgICB0ZW1wbGF0ZTogJzxoMT5Nw6l0w6lvIGRlIExhIExvdXBlPC9oMT4nICtcbiAgICAgICAgJzxpbWcgdi1iaW5kOnNyYz1cIndlYXRoZXIuaWNvblwiPicgK1xuICAgICAgICAne3sgd2VhdGhlci5tYWluLnRlbXAgfX0gwrBDJyxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWF0aGVyOiB7fSxcbiAgICAgICAgICAgIGljb246ICcnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdlYXRoZXIuY3VycmVudFdlYXRoZXIoKS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLndlYXRoZXIgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy53ZWF0aGVyLmljb24gPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nICsgZGF0YS53ZWF0aGVyWzBdLmljb24gKyAnLnBuZyc7XG4gICAgICAgIH0uYmluZCh0aGlzKSkuZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgcmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaG9tZTtcbiIsInZhciB3ZWF0aGVyID0ge1xuICBjdXJyZW50V2VhdGhlcjogZnVuY3Rpb24oKXtcbiAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TGElMjBsb3VwZSZ1bml0cz1tZXRyaWMmYXBwaWQ9MmRlMTQzNDk0YzBiMjk1Y2NhOTMzN2UxZTk2YjAwZTAnKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWF0aGVyOyJdfQ==
