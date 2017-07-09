
define([
  'underscore',
  'marionette',
  'backbone',
  'js/router',
  'text!./App.html'

], function(_, Marionette, Backbone, Router, myTemplate){
  
var url = "js/module/";
  return Marionette.View.extend({
    
      template:  myTemplate,
      
      regions: {
        content: '#data',
        header: '#header'
      },

      initialize: function(options){
        debugger;
        this.controller = options.controller;
      },

      onRender: function(){
        this.controller.on('routerShow', _.bind(this.buildView, this));
        this.controller.on('startModule', _.bind(this.startModule, this));
        this.buildHeaderModule();
        
      },

      buildHeaderModule: function(){
        var that = this;
        require([url + 'menu' + "/module"], 
        function(module){
            var moduleToBuild = new module();
            //TO-DO llamar al router y añadir las subrutes
            that.showChildView('header', new moduleToBuild.view({controller :that.controller}));
          },
          function(err){
            console.log('No existe el modulo solicitado ' + err);
          }
        );
      },

       buildView: function(data){
      //load module
        var that = this;
        require([url + data.module+"/module"], 
          function(module){
            var moduleToBuild = new module();
            //TO-DO llamar al router y añadir las subrutes
            that.showChildView('content', new moduleToBuild.view({controller :that.controller}));
          },
          function(err){
            console.log('No existe el modulo solicitado ' + err);
          }
        );
      },

      startModule: function(data){
        //start module on region
        var that = this;
        require([url + data.module+"/module"], 
          function(module){
            var moduleToBuild = new module();
            data.context.showChildView(data.region, new moduleToBuild.view({controller :that.controller}));
          },
          function(err){
            console.log('No existe el modulo solicitado ' + err);
          }
        );
      }
  });
});