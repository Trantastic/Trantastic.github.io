var keystone = require('keystone');

keystone.init({
  // REMINDER: edit cookie secret when done with dev
  'cookie secret': 'secure string goes here',
  'name': 'yvette-blog',
  'brand': "Yvette's Blog",
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'views': 'template/views',
  'view engine': 'pug',
});

keystone.import('models');

keystone.set('routes', require('./routes'));

keystone.start();