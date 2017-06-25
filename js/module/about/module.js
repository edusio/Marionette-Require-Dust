define([
	'marionette',
 	'../about/view/AboutView'
], 
 function(Marionette, AboutView){
 
  return Marionette.Object.extend({
      
      	view : AboutView
      
  });
});