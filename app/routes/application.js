import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function (tokens) {
    return "Eos - " + tokens.join(" - ");
  },

  actions: {
    error(error, transition) {
      if (error) {
        /**
         * Sample error object
         *
         * error = {
         *  description: undefined,
         *  fileName: "http://eos.dev/assets/vendor.js",
         *  lineNumber: 26437,
         *  message: "Adapter operation failed",
         *  name: "Error",
         *  number: undefined,
         *  stack: "EmberError@http://eos.dev/assets/ve…",
         *  errors: {
         *    code:"0x00000023",
         *    detail:"control exception, code is 35, previous is null",
         *    meta: {
         *      file:"/home/vagrant/htdocs/eos-api/app/Http/Controllers/v1/UsersController.php",
         *      line:36
         *    },
         *    status:"500",
         *    title:"Internal Server Error"
         *   }
         * }
         */
        Ember.Logger.log(error);
        //return this.transitionTo('errorPage');
      }
    }
  }
});
