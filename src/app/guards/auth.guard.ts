import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Passage par le guard!!!');
    
    
    const token = localStorage.getItem('token');
    
    if(token !== null && token !== ''){
      const decodedToken: { userId: string, iat: number, exp: number } = jwtDecode(token);
     
      console.log(decodedToken)
      
      const expirationDate = new Date(decodedToken.exp * 1000); 
      const currentDate = new Date(); 
      
      if (expirationDate < currentDate) {
       
        localStorage.removeItem('token');
        this.router.navigateByUrl('/sign-in');
        return false;

      } else {
       
        return true;
      }

  



    }else{
      this.router.navigateByUrl('/sig-in');
      return false;
    }
     
  }
  
}
