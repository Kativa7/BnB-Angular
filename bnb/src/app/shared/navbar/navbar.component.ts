import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() onToggleSideNav = new EventEmitter<void>();
  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {}

  toggleSidenav() {
    this.onToggleSideNav.emit();
  }
 onLogout(){
   this.userService.logout();
   this.router.navigate(['/catalog'])

 }

 

}
