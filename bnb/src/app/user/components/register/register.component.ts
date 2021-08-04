import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}


  register(form: NgForm): void {
    const {username, email, password} = form.value;
    this.userService.register({username, email, password}).subscribe({
      next:  () => {
        this.router.navigate(['/catalog'])

      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
