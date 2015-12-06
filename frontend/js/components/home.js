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
