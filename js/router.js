
define([
  'underscore',
  'marionette',
  'js/Controller'
], 
 function(_, Marionette, Controller){


  return Marionette.AppRouter.extend({

      appRoutes: {
        ":url" : 'buildModule',
        ":url/*subroute" : 'buildModule'
      },

    initialize: function(data){
      this.controller = data;
    }

  });

 
  
});