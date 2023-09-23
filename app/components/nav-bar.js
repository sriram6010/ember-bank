import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  customer_id;
  @tracked isLoggedIn;


  @action
   logged(){
    console.log("local "+localStorage.getItem("customer_id"));
    this.customer_id = localStorage.getItem("customer_id");
    this.isLoggedIn= localStorage.getItem("customer_id") !== null;
  }

}
