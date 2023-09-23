import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UPIRegister extends Component {
    upi_id;
    pin;

    @tracked showForm = false;


    @action
    toggle(){
        this.showForm = !this.showForm
    }

    @action
    upiAction(action){
        if (action === "register"){
            this.register();
        } else if (action === "transfer"){
            this.transfer();
        }
    }

    @action
    async transfer(){

        console.log("inside transfer");
       const sender = this.args.value
        console.log("trans "+sender);
        console.log("trans "+this.upi_id);
        console.log("trans "+this.pin);
        console.log("trans "+this.amount);
        const params = {
            sender: sender,
            receiver: this.upi_id,
            pin: this.pin,
            amount: this.amount
        }
        const url = new URL('/bank-app/upi', window.location.origin);
    url.search = new URLSearchParams(params);

    const response = await fetch(url.toString(),{
        method: 'PUT'
    });
    if (response.status === 401){
        alert(response.statusText);
      localStorage.clear();
      this.router.transitionTo('login');
    }
    
    const res = await response.json();
    alert(JSON.stringify(res))
    location.reload(true);
    
}


    @action
    async register(){

        console.log("inside register");
       const account_no = this.args.value
        console.log("acc "+account_no);
        console.log("acc "+this.upi_id);
        console.log("acc "+this.pin);
        const params = {
            account_no: account_no,
            upi_id: this.upi_id,
            pin: this.pin
        }
        const url = new URL('/bank-app/upi', window.location.origin);
    url.search = new URLSearchParams(params);

    const response = await fetch(url.toString(),{
        method: 'POST'
    });
    if (response.status === 401){
        alert(response.statusText);
      localStorage.clear();
      this.router.transitionTo('login');
    }
    if(response.ok){
    const res = await response.json();
    alert(JSON.stringify(res))
    location.reload(true);
    }
    
    
}
}
