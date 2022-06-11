import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageProductListComponent } from './pages/page-product-list/page-product-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageAdminControlComponent } from './pages/page-admin-control/page-admin-control.component';
import { PageAdminUpdateComponent } from './pages/page-admin-update/page-admin-update.component';
import { PageVitaminesComponent } from './pages/page-vitamines/page-vitamines.component';
import { CardsComponent } from './components/cards/cards.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthInterceptor } from './auth.interceptor';










@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageSignUpComponent,
    PageSignInComponent,
    PageProductListComponent,
    PageNotFoundComponent,
    PageAdminComponent,
    PageAdminControlComponent,
    PageAdminUpdateComponent,
    PageVitaminesComponent,
    CardsComponent,
    PageDetailsComponent,
    DetailsComponent,
 
    
   
   
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
