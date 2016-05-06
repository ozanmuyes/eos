import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {
    path: 'giris'
  });

  this.route('users', {
    path: 'kullanicilar'
  }, function() {
    this.route('create', {
      path: 'ekle'
    });
  });

  this.route('permissions', {
    path: 'izinler'
  });
});

export default Router;
