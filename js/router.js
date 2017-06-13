
define([
  'underscore',
  'marionette',
  '../js/Controller'
], 
 function(_, Marionette, Controller){


  return Marionette.AppRouter.extend({

      appRoutes: {
        "about" : "showAbout",
        ":url" : 'showAbout'
      },

    initialize: function(data){
      this.controller = data;
    },

    onRoute: function(name, path, args) {
      console.log('User navigated to ' + name);
      this.triggerMethod('rooterShow', {name : name});
      }

  });

 
  
});