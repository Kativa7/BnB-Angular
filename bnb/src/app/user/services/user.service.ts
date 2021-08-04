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

  login(data:{ email: string, password: string}) {
    return this.http.post<UserLogin>(URL + '/login', data, { withCredentials: false});

  }

  register(data: { username: string; email: string; password: string }) {
    return this.http.post<UserRegister>(URL + '/register', data, { withCredentials: false});
  }
}
