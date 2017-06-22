
define([
  'underscore',
  'marionette',
  'backbone',
  'text!js/module/about/About.html'
], function(_, Marionette, Backbone, templateAbout){
  
  //define.amd.dust = true;
 

  return Marionette.View.extend({
      
      template: templateAbout
      
      
  });
});