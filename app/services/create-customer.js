import Service from '@ember/service';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class CreateCustomerService extends Service {
  @tracked name = '';
  @tracked email = '';
  @tracked address = '';
  @tracked customer_id = '';
  password='';

  @service router;

  @action
  async submitForm(event) {
    event.preventDefault();

    try {
      const url = new URL('/bank-app/signup', window.location.origin);

      const data = {
        name: this.name,
        email: this.email,
        address: this.address,
        password : this.password
      };
      this.password='';
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
        const responseData = await response.json();
        this.response = responseData;
        this.customer_id = responseData.customer_id.trim();
        alert('Your customer_id: ' + responseData.customer_id);
        this.router.transitionTo('customer-detail', this.customer_id);
        console.log(responseData);
      } else {
        this.response =
          'Error: Failed to submit the form.' + response.statusText;
        //this.router.transitionTo('contact');
      }
    } catch (error) {
      console.error('HTTP Request Error:', error);
      this.response = 'Error: Failed to submit the form.';
    }
  }
}
