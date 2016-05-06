import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  error: null,

  actions: {
    logUserIn(email, password) {
      Ember.Logger.info(
        "User logging in with " +
        "email: '" + email + "' " +
        "password: '" + password + "'."
      );

      // reset the error while trying to authenticate the credentials
      this.set("error", null);

      this.get("session").authenticate("authenticator:jwt", {
        identification: email,
        password: password
      }).catch((reason) => {
        Ember.Logger.error(reason);
        this.set("error", reason);
      });

      // prevent bubbling
      return false;
    }
  }
});
