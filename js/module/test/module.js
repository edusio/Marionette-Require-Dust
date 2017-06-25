define([
	'marionette',
 	'../test/view/TestView'
], 
 function(Marionette, TestView){
 
  return Marionette.Object.extend({
      
      	view : TestView
      
  });
});