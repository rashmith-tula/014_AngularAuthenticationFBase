
import { ActivatedRouteSnapshot, 
         RouterStateSnapshot,
         CanActivate, 
         Router} from '@angular/router';
import { authService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()

export class authGuard implements CanActivate {
    constructor(private auth: authService, private Router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.auth.isAuthenticated()) {
         return true;
      } else {
         this.Router.navigate(['/signin']);
         return false;
      }
    }
}