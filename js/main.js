
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
  '../js/app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});

define([
  // Alias definidos antes
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'marionette'    // lib/backbone/backbone
], function($, _, Marionette){
  // Las variables de jQuery, Underscore y Backbone disponibles para usar.
  return {};
});

