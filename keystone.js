var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'yvette-blog',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  views: 'template/views',
  'view engine': 'pug',
});

keystone.set('routes', require('./routes'));

keystone.import('models');

keystone.start();