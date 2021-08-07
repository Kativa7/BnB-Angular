import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserLogin from '../models/User-login';
import UserRegister from '../models/User-register';

const URL = 'http://localhost:5000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(data: { username: string; email: string; password: string }) {
     return this.http.post<UserRegister>(URL + '/register', data);
  }

  login(data:{ email: string, password: string}) {
    return this.http.post<UserLogin>(URL + '/login', data, { withCredentials: false});

  }

  logout(){
    this.http.get(URL + '/logout', {})
    localStorage.clear();
  }

  getUser() {
    return localStorage.getItem('currentUser')
  }

  isLoggedIn(): boolean{
    let user = localStorage.getItem('currentUser');
    if(!user){
      return false
    }

    return true; 
  }

}