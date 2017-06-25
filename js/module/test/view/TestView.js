
define([
  'underscore',
  'marionette',
  'backbone',
  'text!js/module/test/template/Test.html'
], function(_, Marionette, Backbone, templateAbout){
  
  return Marionette.View.extend({
      
      template: templateAbout
      
  });
});