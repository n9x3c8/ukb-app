import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { STUDENT_ROLE_VALUE } from '../defined/login.define';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(STUDENT_ROLE_VALUE == 2) {
        return true;
      }
      return false;
  }
  
}
