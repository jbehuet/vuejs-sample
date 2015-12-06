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