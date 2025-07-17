import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'customers',
    component: CustomerListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customers/new',
    component: CustomerFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customers/:id',
    component: CustomerDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customers/:id/edit',
    component: CustomerFormComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/customers' }
];
