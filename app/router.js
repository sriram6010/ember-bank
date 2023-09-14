import EmberRouter from '@ember/routing/router';
import config from 'bank-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('customer-form', { path: '/create-customer' });
  this.route('customer-response');
  this.route('sample');
  this.route('response');
  this.route('customer-detail', { path: '/customer-detail/:customer_id' });
});
