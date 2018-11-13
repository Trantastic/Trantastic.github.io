var keystone = require('keystone');

module.exports = function(req, res) {
    res.render('../../templates/views/blog')
    var view = new keystone.View(req, res);
    var locals = res.locals;
    
    view.render('blog');
    
};