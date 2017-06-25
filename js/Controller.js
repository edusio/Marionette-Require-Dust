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

      navigate : function(params){
      	// backbone navigate events
         Backbone.history.navigate(params.destination, true);
      },

      startModule: function(data){
        //Start module on region
        this.triggerMethod('startModule', {
          module : data.name,
          region: data.region,
          context : data.context
        });
      }
      
  });
});