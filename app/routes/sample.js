import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SampleRoute extends Route {
  @service('sample-service') apiservice;
  @service router;
  model() {
    console.log('entered sampleroute');
    return this.apiservice.getRequest('/bank-app/bank-app');

    //this.router.transitionTo('response');
  }

  afterModel(model, transition) {
    this.router.transitionTo('response', {});
  }
}
