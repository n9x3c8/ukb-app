import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { STUDENT_ROLE_VALUE } from '../defined/login.define';
import { StorageService } from '../services/storage.service';
import { User } from '../defined/type.define';
@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(private storageService: StorageService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user: Promise<User> = this.storageService.get('user');
      return (await user).role_id === STUDENT_ROLE_VALUE ? true : false;
  }
  
}