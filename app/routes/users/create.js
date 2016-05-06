import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

Ember.Logger.info("users/create route");

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model () {
    return this.store.createRecord("user");
  }
});
