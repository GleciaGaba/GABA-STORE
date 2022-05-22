import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  router: any;
  // point d'exclamation sert à dire à notre code TS 
  // que nous n'allons pas initialiser cette propriété 
  // dans le constructor mais plus tard (ici dans le ngOnInit)
  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validator: this.passwordMatchValidator
      }
    );
    /*
    signUpForm = {
      userName: 'deuhzu',
      password: 'ifrejfi',
      confirmPassword: 'djiezidj'
    }
    */
  }

  passwordMatchValidator(form: FormGroup) {
    // if(form.get('password') !== null) {
    //   if(form.get('password').value) {

    //   }
    // }
    // => résumé en form.get('password')?.value
    // Le point d'intérrogation permet de ne pas 
    // accéder à la valeur de 'value' si le password est 'null' 
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  onSubmitForm() {
  

    // {"userName": "", "password": "", "confirmPassword": ""};
    const username = this.signUpForm.value.userName;
    const password = this.signUpForm.value.password;
    // je transfère la valeur de mes champs userName et password
    // dans 2 constances pour plus de facilité de manipulation
    this.authService.registerUser(username, password).subscribe((reponseApi) => {
      console.log(reponseApi);
    });
    

  }

 
    /**
     * fetch("http://url").then((resp) => {
     *  return resp.json()
     * }).then((reponseApi) => {
     *  console.log(reponseApi);
     * })
     */
}






