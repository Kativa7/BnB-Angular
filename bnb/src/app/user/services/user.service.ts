import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/models/User';
import UserLogin from '../models/User-login';
import UserRegister from '../models/User-register';

const URL = 'http://localhost:5000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: any;
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

  hasBooked(listingId: number): boolean{
    this.user = localStorage.getItem('currentUser');
    this.user = JSON.parse(this.user);
    let match = this.user?.booked.filter((l: number) => l === listingId);
    console.log(match)
   
   if(match?.length> 0){
     return true;
   }else{
     return false
   }
 
  }

}