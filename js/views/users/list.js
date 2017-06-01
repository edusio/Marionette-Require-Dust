define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project/list.html'
], function($, _, Backbone, projectListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      var data = {};
      var compiledTemplate = _.template( projectListTemplate, data );
      this.$el.append( compiledTemplate );
    }
  });
  return ProjectListView;
});

define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var ProjectModel = Backbone.Model.extend({
    defaults: {
      name: "Nombre de ejemplo"
    }
  });
  return ProjectModel;
});

define([
  'underscore',
  'backbone',
  'models/project'
], function(_, Backbone, ProjectModel){
  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel
  });
  return ProjectCollection;
});

define([
  'jquery',
  'underscore',
  'backbone',
  'collections/projects',
  'text!templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Example"});
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  return ProjectListView;
});