define([
  'underscore',
  'marionette',
  'backbone'
], 
 function(_, Marionette, Backbone){
 
  return Marionette.Object.extend({
      showAbout : function(data){
      	console.log('entro desde el controller, con data ->'+ data);
  		this.triggerMethod('pulaMorena');

      }      
      
  });

  
});