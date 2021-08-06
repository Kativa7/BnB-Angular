import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() onToggleSideNav = new EventEmitter<void>();
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {}

  toggleSidenav() {
    this.onToggleSideNav.emit();
  }
 onLogout(){
   this.userService.logout();
 }

 

}
