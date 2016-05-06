import Ember from 'ember';

Ember.Logger.info("users/create controller");
Ember.Logger.info(this);

export default Ember.Controller.extend({
  actions: {
    persistUser: function () {
      this.store.save().then(function () {
        this.transitionTo('users.index');
      }.bind(this));

      // prevent bubbling
      return false;
    }
  }
});
