import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
logginFailed!: boolean;
error: string | undefined;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

login(form: NgForm){
const {email, password} = form.value;
this.userService.login({email, password}).subscribe({
  next: () => {
    this.router.navigate(['/catalog'])

  },
  error: (err) => {
   this.logginFailed = true;
   this.error = (err.error.message);
   console.log(err.error.message)
  }
});
}
}