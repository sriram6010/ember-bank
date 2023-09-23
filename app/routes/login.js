import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service('login-service') customer;
  @service router;
  
  model() {
    let customer = this.customer;
      console.log("m c "+customer.customer_id);
    return customer;
  }

}
