import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['eos-component', 'component-user-create-form'],
  classNameBindings: ['_error:has-error'],

  submit () {
    this.get("onSubmit")();

    // prevent bubbling
    return false;
  }
});
