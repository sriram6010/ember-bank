import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LogoutRoute extends Route {

    @service router;
    @service('login-service') service;

    async model() {
    
    
        const url = new URL('/bank-app/logout', window.location.origin);
    
        const response = await fetch(url.toString());
        if (response.ok){
          localStorage.clear();
          
          this.service.checkLogin();
          this.router.replaceWith('');
        }
      }


      
}
