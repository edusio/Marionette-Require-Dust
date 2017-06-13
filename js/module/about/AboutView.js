
define([
  'underscore',
  'marionette',
   'backbone'

], function(_, Marionette, Backbone){
  

  return Marionette.View.extend({
      
      /*bla */
      template:  _.template('<h1>Hola desde modulo de TEST</h1>'),

  });
});