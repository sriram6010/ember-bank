import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SampleController extends Controller {
  name = '';
  address = '';

  @action
  modify() {
    this.name = 'modify' + this.model.name;
    this.address = 'modify' + this.model.address;
  }
}

class Sample {
  name = '';
  address = '';

  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}
