
define([
  'underscore',
  'marionette',
  'backbone',
  'text!js/module/about/About.html'
], function(_, Marionette, Backbone, templateAbout){
  
  //define.amd.dust = true;
 

  return Marionette.View.extend({
      
      events : {
      	'click #hola' : 'navigate'
      },

      initialize: function(){
      	debugger;
      },

      template: templateAbout,

      navigate: function(){
      	this.options.controller.navigate();
      }
      
      
  });
});