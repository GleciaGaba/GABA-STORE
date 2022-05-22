import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProductListComponent } from 'src/app/pages/page-product-list/page-product-list.component';
import { PageSignUpComponent } from 'src/app/pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from  'src/app/pages/page-sign-in/page-sign-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: PageProductListComponent},
  { path: 'sign-up', canActivate: [AuthGuard], component: PageSignUpComponent},
  { path: 'sign-in', component: PageSignInComponent},
  { path: 'product-list', component: PageProductListComponent},
  { path: 'admin', component: PageAdminComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
