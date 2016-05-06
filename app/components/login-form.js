import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['eos-component', 'component-login-form'],
  classNameBindings: ['_error:has-error'],

  email: "",
  password: "",
  _error: null,

  submit() {
    // TODO Consider Parsley validation

    Ember.Logger.info(
      "Login form component submit with " +
      "email: '" + this.get("email") + "' " +
      "password: '" + this.get("password") + "'."
    );

    this.get("onSubmit")(this.get("email"), this.get("password"));

    // prevent bubbling
    return false;
  }
});
