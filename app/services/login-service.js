import Service from '@ember/service';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginService extends Service {
  @tracked customer_id = '';
  password='';

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
        this.router.transitionTo('customer-detail', this.customer_id);
        //location.reload(true);
      } else {
        alert(response.statusText);
        console.log(response.statusText);
        //this.router.transitionTo('login');
      }
    } catch (error) {
      console.error('HTTP Request Error:', error);
      //this.response = 'Error: Failed to submit the form.';
    }
  }

  async logout(event) {
    event.preventDefault();

    try {
      const url = new URL('/bank-app/logout', window.location.origin);

  
      
      console.log(JSON.stringify(data));
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        this.router.transitionTo('customer-detail', this.customer_id);
      } else {
        console.log(response.toString());
        //this.router.transitionTo('login');
      }
    } catch (error) {
      console.error('HTTP Request Error:', error);
      //this.response = 'Error: Failed to submit the form.';
    }
  }


}
