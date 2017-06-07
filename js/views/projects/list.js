define([
  'underscore',
  'marionette'

], function(_, Marionette){
  
	return Marionette.View.extend({
  		

  		template:  _.template('<h1>Marionette says hello!</h1>'),
     		
      initialize: function(options){
  			debugger;

    
  		}

	});

 
  
});