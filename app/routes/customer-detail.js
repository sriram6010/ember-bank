import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class CustomerDetailRoute extends Route {
  
  @service router;

  async model(params) {
    //params.customer_id = params.customer_id.substring(1);

    console.log('model : ' + params.customer_id);

    const url = new URL('/bank-app/customer', window.location.origin);
    url.search = new URLSearchParams(params);

    const response = await fetch(url.toString());
    if (response.status === 401){
      localStorage.clear();
      this.router.transitionTo('login');
    }
    const customer = await response.json();

    console.log("ss"+customer);
    return customer;
  }
}
