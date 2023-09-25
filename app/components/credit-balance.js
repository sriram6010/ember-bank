
import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CreditBalanceComponent extends Component {
   @tracked amount;
   @service router;

   @tracked showForm = false;


    @action
    toggle(){
        this.showForm = !this.showForm
    }

    @action
    updateAmount(event){
        this.amount = event.target.value;
    }

    @action
    async submitForm(){
        console.log(this.args.value);
        let account_no = this.args.value;
        let data = {
            account_no : account_no,
            amount: this.amount
        }
        const url = new URL('/bank-app/account', window.location.origin);
        url.search = new URLSearchParams(data);
        const message = await fetch(url.toString(),{
            "method": "PUT"
        }).then(response => response.json());
    
        console.log(message);
        alert(JSON.stringify(message));
        this.router.refresh();
    }
}
