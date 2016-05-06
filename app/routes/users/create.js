import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: "Yeni Kullanıcı",

  model () {
    return this.store.createRecord("user");
  }
});
