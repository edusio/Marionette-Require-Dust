define([
  'underscore',
  'jquery',
  'backbone',
  'marionette',
  '../js/views/projects/list'
], function(_, $,Backbone, Marionette, ListView){
  
  var AppRouter = Marionette.AppRouter.extend({

    routes: {
      // Algunas urls de ejemplo
      'projectos': 'showProjects',
      'users': 'showUsers',
      // Default
      '*actions': 'defaultAction'
    },

    /*routes: function(ev){
     this._addAppRoute(this,'projectos', 'showProjects');
    },*/

    showProjects: function(){
		console.log('showProjects router');
      var view = new ListView(this);
      view.render();

    },

    defaultAction: function(actions){
    	 console.log('No route:' +actions);
    }
  });

  var initialize = function(){

    var app_router = new AppRouter;

    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});