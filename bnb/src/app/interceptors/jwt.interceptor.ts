import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
  
    let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `${currentUser.token}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap((res: any) => {
        if (res instanceof HttpResponse && res.body.accessToken) {
          this.saveToken(res.body);
        }
      })
    );
  }

  private saveToken(data: any) {
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        username: data.username,
        token: data.accessToken,
        email: data.email,
        id: data._id,
        booked: data.booked
      })
    );
  }
}
