import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    // TODO rename this action as "logout"
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
