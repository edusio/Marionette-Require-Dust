define([
	'marionette',
 	'../test/TestView'
], 
 function(Marionette, TestView){
 
  return Marionette.Object.extend({
      
      	view : TestView
      
  });
});