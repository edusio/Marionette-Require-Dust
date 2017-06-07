<<<<<<< HEAD
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

  
=======
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

  
>>>>>>> bc2ad9a4eeb3ed8262519a8ebc4e04a5c3d5ac57
});