import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomerResponseRoute extends Route {
  @service('create-customer') customer;

  model() {
    console.log(this.customer);
    return this.customer;
  }
}
