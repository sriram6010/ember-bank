import Service from '@ember/service';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { get, post } from '../components/api';

export default class SampleService extends Service {
  @service router;

  async getRequest(path) {
    try {
      const response = await fetch(path, {
        method: 'GET',
      }).then((data) => data.json());
      // const message = await response.json();

      console.log('inside sample service ' + response);
      const data = {
        name: 'sriram',
        email: 'email',
        address: response,
      };
      return data;

      /*const data = {
        name: this.name,
        email: this.email,
        address: this.address,
      };
      console.log(data);
      this.response = 'okk';
      //this.router.transitionTo('customer-response');

      console.log(JSON.stringify(data));
      const response = post('bank-app', data);

      if (response.ok) {
        const responseData = await response.json();
        this.response = responseData;
        console.log(responseData);
        this.router.transitionTo('customer-response', {
          queryParams: 'sriram',
        });
      } else {
        this.response =
          'Error: Failed to submit the form.' + response.statusText;
        this.router.transitionTo('contact');
      }*/
    } catch (error) {
      console.error('HTTP Request Error:', error);
      this.response = 'Error: Failed to submit the form.';
    }
  }
}
