define([
	'marionette',
 	'../menu/view/MenuView'
], 
 function(Marionette, MenuView){
 
  return Marionette.Object.extend({
      
      	view : MenuView
      
  });
});