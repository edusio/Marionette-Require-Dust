
define([
  'underscore',
  'marionette',
  'backbone',
  'text!js/module/about/template/About.html'
], function(_, Marionette, Backbone, templateAbout){
  
  //define.amd.dust = true;
 

  return Marionette.View.extend({
      
      template: templateAbout,
      
      regions: {
        testRegion: '#region-test'
      },

      events : {
      	'click #button' : 'navigate'
      },

      navigate: function(ev){
      	this.options.controller.navigate({
          destination: 'test'
        });
      },

      onRender: function(){
        this.options.controller.startModule({
          name : 'test',
          region: 'testRegion',
          context : this
        })
      }
      
      
  });
});