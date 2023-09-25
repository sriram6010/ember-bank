import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class CustomerDetailRoute extends Route {
  
  @service router;
  @service store;

  async model(params) {
    //params.customer_id = params.customer_id.substring(1);

    console.log('model : ' + params.customer_id);
    let cu;

    let data = await this.store.queryRecord('customer',
    {customer_id:params.customer_id});

    data.accounts.sort((a,b) =>{
      const acc_a = a.account_no.toUpperCase();
      const acc_b = b.account_no.toUpperCase();

    if(acc_a < acc_b) return -1;
    if(acc_a > acc_b) return 1;
    return 0;
  });

    return data;
   

  
    /*const url = new URL('/bank-app/customer', window.location.origin);
    url.search = new URLSearchParams(params);

    const response = await fetch(url.toString());
    if (response.status === 401){
      localStorage.clear();
      this.router.transitionTo('login');
    }
    const customer = await response.json();

    console.log("ss"+customer);
    return customer;
    */
  }

}
