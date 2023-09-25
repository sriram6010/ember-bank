import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class ApplicationRoute extends Route {
  
  @service router;
  @service('login-service') service;

  beforeModel(){
    let local = localStorage.getItem("customer_id");
    console.log("app before "+local);
    this.service.checkLogin();
    
  }

  @action
  loading(transition) {
    console.log(transition);
    return true;
  }

  @action
  error(error, transition) {
    console.log(transition);
    console.log(error);
    if(error.errors[0].status === '401'){
        alert("Unauthorized,need to login");
        this.router.transitionTo('logout');
    }else{
    return true;
    }
  }
}
