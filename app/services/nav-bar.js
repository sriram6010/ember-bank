import Service from '@ember/service';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class NavBarService extends Service {
  @tracked isLoggedIn;
  @tracked customer_id;
  

  @service router;

  @action
   logged(){
    console.log("local "+localStorage.getItem("customer_id"));
    this.customer_id = localStorage.getItem("customer_id");
    this.isLoggedIn= localStorage.getItem("customer_id") !== null;
  }


 
}
