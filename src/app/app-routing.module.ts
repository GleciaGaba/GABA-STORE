import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProductListComponent } from 'src/app/pages/page-product-list/page-product-list.component';
import { PageSignUpComponent } from 'src/app/pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from  'src/app/pages/page-sign-in/page-sign-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageAdminControlComponent } from './pages/page-admin-control/page-admin-control.component';
import { PageAdminUpdateComponent } from './pages/page-admin-update/page-admin-update.component';
import { PageVitaminesComponent } from './pages/page-vitamines/page-vitamines.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {path: '', component: PageProductListComponent},
  { path: 'sign-up', component: PageSignUpComponent},
  { path: 'sign-in', component: PageSignInComponent},
  { path: 'product-list', component: PageProductListComponent},
  { path: 'admin', component: PageAdminComponent, canActivate: [AuthGuard]},
  { path: 'admincontrol', component: PageAdminControlComponent, canActivate: [AuthGuard]},
  { path: 'adminupdate/:id-product', component: PageAdminUpdateComponent,canActivate: [AuthGuard]},
  { path: 'vitamines', component: PageVitaminesComponent},
  { path: 'details', component: PageDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
