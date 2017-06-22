
define([
  'underscore',
  'marionette',
  'backbone',
  'js/router',
  'text!./App.html'

], function(_, Marionette, Backbone, Router, myTemplate){
  

  return Marionette.View.extend({
      
      /*bla */
      template:  myTemplate,

  });
});