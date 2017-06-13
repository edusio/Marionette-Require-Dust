define([
  'underscore',
  'marionette',
  'backbone'
], 
 function(_, Marionette, Backbone){
 
  return Marionette.Object.extend({
      test : function(data){
        console.log('require del file');
         }      
      
  });
});