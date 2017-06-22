define([
  'underscore',
  'marionette',
  'backbone'
], 
 function(_, Marionette, Backbone){
 
  return Marionette.Object.extend({
      buildModule : function(name, path, args){
      	console.log('entro desde el controller, con data ->'+ name);
  		this.triggerMethod('routerShow', {module:name, subroute: path});
      },

      navigate : function(){
      	//TO-DO backbone navigate events
      }      
      
  });
});