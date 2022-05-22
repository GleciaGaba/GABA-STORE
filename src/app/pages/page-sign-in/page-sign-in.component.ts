import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }
  signInError = false; 
  ngOnInit(): void {
  }

  gotoSignUp() {
    this.router.navigate(['/sign-up']);  
  }
  
  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    
    

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      next: (resp: any) => {
        console.log(resp.token);

      
        this.router.navigateByUrl('/');
          //TODO stockage de nom token
          //Localstorage

          localStorage.setItem("token", resp.token);
          this.authService.messager.next(true);
        
        // stockage de mon token 
      },
      error: (err: any) => {
       
        this.signInError = true;
        console.log(err);
        this.authService.newsletter.next('Erreur de connexion ...');
      }

      
    })

    

     
  }

  redirectUser() {
    // redirection de mon user 
    this.router.navigateByUrl('/procuct-list');
  }

  stockageToken(tokenParam: string) {
    // stockage de mon token 
  }

}
