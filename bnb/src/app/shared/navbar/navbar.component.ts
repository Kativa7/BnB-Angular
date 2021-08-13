import { Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() onToggleSideNav = new EventEmitter<void>();
  constructor(public userService: UserService, private router: Router) {
  }


  toggleSidenav() {
    this.onToggleSideNav.emit();
  }

 onLogout(){
   this.userService.logout();
   this.router.navigate(['/']);

 }

 

}
