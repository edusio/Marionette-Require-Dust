define([
  'underscore',
  'marionette',
  'dust',
  '../projects/test'

], function(_, Marionette, dust, test){
  
	return Marionette.View.extend({
  		el: '#content',
  		template: 'plain',
     		
      initialize: function(options){
  			debugger;

        this.test = new test();

  		},

      regions: {
        'main' : '#region1'
      }


      
	});

 
  
});