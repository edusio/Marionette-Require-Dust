
define([
  'underscore',
  'marionette',
   'backbone'

], function(_, Marionette, Backbone){
  

  return Marionette.View.extend({
      
      template:  _.template('<h1>Hola desde modulo de ABOUT</h1>'),

  });
});