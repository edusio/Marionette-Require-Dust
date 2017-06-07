define([
  'underscore',
  'marionette',
   'backbone',
    '../js/router'

], function(_, Marionette, Backbone, Router){
  

  return Marionette.View.extend({
      

      template:  _.template('<h1>Marionette says hello!</h1>'),
        
      initialize: function(options){
        debugger;
      
       
    
      },

      test: function(data){
        console.log('escucho evento');
      }

  });

 
  
});