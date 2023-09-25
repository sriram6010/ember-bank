import Service from '@ember/service';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginService extends Service {
  @tracked customer_id;
  @tracked isLoggedIn = false;
  password;

  @service router;

  @action
  async submitForm(event) {
    event.preventDefault();

    try {
      const url = new URL('/bank-app/login', window.location.origin);

      const data = {
        customer_id : this.customer_id,
        password : this.password
      };
      this.password = null;
      url.search = new URLSearchParams(data);
      console.log(url.toString());
      //this.response = 'okk';
      //this.router.transitionTo('customer-response');

      console.log(JSON.stringify(data));
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        localStorage.setItem("customer_id",this.customer_id);
        this.isLoggedIn = true;
        this.router.replaceWith('customer-detail', this.customer_id);
        //location.reload(true);
      } else {
        alert("Login failed "+response.statusText);
        console.log(response.statusText);
        this.router.transitionTo('login');
      }
    } catch (error) {
      console.error('HTTP Request Error:', error);
      //this.response = 'Error: Failed to submit the form.';
    }
  }

  @action
  checkLogin(){
    
    let local = localStorage.getItem("customer_id");
    console.log("checking login "+local);
    if(local===null){
      this.customer_id = null;
      this.password = null;
      this.isLoggedIn = false;
      this.router.transitionTo('logout');
      } else {
        this.customer_id = local;
        this.isLoggedIn = true;
      }
  }


}
