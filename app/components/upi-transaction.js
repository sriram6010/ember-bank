import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {service} from '@ember/service';


export default class UpiTransactionComponent extends Component {
  
  @service store;
  history;
  @tracked show = false;

  @action
  async transactionHistory() {

    console.log("upi component")
  
    const history = await this.store.query('upi-transaction',
    {
      upi: this.args.value
    });
    console.log(history)
    this.history = history;
    this.show = true;
  }

  @action
  close(){
    this.show = false;
  }

  
}
