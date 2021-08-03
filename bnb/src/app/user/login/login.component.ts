import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
login(form: NgForm){
const {email, password} = form.value;
this.userService.login({email, password}).subscribe({
  next: () => {
    this.router.navigate(['/catalog'])

  },
  error: (err) => {
    console.error(err)
  }
});
}
}
