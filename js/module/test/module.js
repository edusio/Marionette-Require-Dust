define([
	'marionette',
 	'../about/AboutView'
], 
 function(Marionette, AboutView){
 
  return Marionette.Object.extend({
      
      	view : AboutView
      
  });
});