define([
  'jquery',
  'underscore',
  'marionette',
  '../js/router' // Request router.js
], function($, _, Marionette, Router){

  var initialize = function(){
  
    Router.initialize();
  }
  return {
    initialize: initialize
  };
});