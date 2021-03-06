import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
