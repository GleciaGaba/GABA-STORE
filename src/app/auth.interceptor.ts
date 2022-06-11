import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('test intercepteurs')
    const token = localStorage.getItem('token');
    if(token !=='' && token !==null){
      const authReq = request.clone({


        headers: request.headers.set('Authorization', token)
      })
      return next.handle(authReq);
    
    } else {
      return next.handle(request);
    }
    
   
    return next.handle(request);
    console.log('test intercepteurs')
  }
}
