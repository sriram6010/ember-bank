import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LogoutRoute extends Route {

    @service router;

    async model() {
    
    
        const url = new URL('/bank-app/logout', window.location.origin);
    
        const response = await fetch(url.toString());
        if (response.ok){
          localStorage.clear()
          this.router.transitionTo('');
        
        }
      }
      
}
