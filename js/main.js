require.config({

	// Base path used to load scripts
	baseUrl: 'node_modules/',
	
  	paths: {
	    'jquery': 'jquery/dist/jquery',
	    'underscore': 'underscore/underscore',
	    'backbone': 'backbone/backbone',
      'backbone.radio': 'backbone.radio/build/backbone.radio',
      'marionette': 'backbone.marionette/lib/backbone.marionette',
      'dust':'dustjs-linkedin/lib/dust'
  	}
});


require([

  // Load our app module and pass it to our definition function
  'marionette',
  'backbone',
   '../js/app',
   '../js/router',
   '../js/Controller'
], function(marionette, Backbone, RootView, Router, Controller){
  // The "app" dependency is passed in as "App"

var App = marionette.Application.extend({
  region: '#content',

  initialize: function(){
    this.controller =  new Controller({
      app: true,
      module: this
    });
    this.controller.app = this;
    this.controller.on('pulaMorena', this.buildView);
  },
  buildView: function(){
    console.log('escucho el evento');
  },

  onStart(options) {
    var root = new Router(this.controller);
    this.showView(new RootView());
    Backbone.history.start();
    
  }

  
});
//var MyRouter = marionette.AppRouter.extend({});

var myApp = new App();
myApp.start();

});


define([
  // Alias definidos antes
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'marionette'   // lib/backbone/backbone

], function($, _, Marionette){
  // Las variables de jQuery, Underscore y Backbone disponibles para usar.
  return {};
});
