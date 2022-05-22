import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageProductListComponent } from './pages/page-product-list/page-product-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsVitaminesComponent } from './components/cards-vitamines/cards-vitamines.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';



@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageSignUpComponent,
    PageSignInComponent,
    PageProductListComponent,
    PageNotFoundComponent,
    CardsVitaminesComponent,
    PageAdminComponent,
    AdminListComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
