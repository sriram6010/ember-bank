import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CustomerDetailController extends Controller {
  account_count;
  account_found;

  get checkAccount() {
    console.log(this.model.accounts.length);
    this.account_count = this.model.accounts.length;
    if (this.account_count === 1) {
      let account_no = this.model.accounts[0].account_no;
      this.account_found = account_no != '' && account_no != null;
    } else if (this.account_count > 1) {
      this.account_found = true;
    }
  }

}
