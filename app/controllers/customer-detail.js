import Controller from '@ember/controller';


export default class CustomerDetailController extends Controller {
  account_count;
  account_found;

  get checkAccount() {
    console.log("check account ")
   this.account_count = this.model.accounts.length;
    if (this.account_count === 1) {
      let account_no = this.model.accounts[0].account_no;
      this.account_found = account_no != '' && account_no != null;
    } else if (this.account_count > 1) {
      this.account_found = true;
    }

  }

}
