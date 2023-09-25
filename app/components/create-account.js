import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import fetch from 'fetch';
import {service} from '@ember/service';

export default class CreateAccountComponent extends Component {
  @tracked customer_id;
  @service router;

  @action
  async createAccount(){
    this.customer_id = this.args.value;
    const pathparam = {
      customer_id : this.customer_id
    }

    const url = new URL("/bank-app/account",window.location.origin);
    url.search = new URLSearchParams(pathparam);
    

    const response = await fetch(url.toString(),
    {
      method: 'POST'
    }
    );
   if (response.ok){
    const account = await response.json();
        alert("Account No: "+account.account_no);
    this.router.refresh();
  }

  }
}
