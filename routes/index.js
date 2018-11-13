var keystone = require('keystone');
var express = require('express');
var importRoutes = keystone.importer(__dirname);

var routes = {
    views: importRoutes('./views'),
};

exorts = module.exports = function(app) {
    app.use('/', express.static('public'));
    app.get('/blog', routes.views.blog);
};
