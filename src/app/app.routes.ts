import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialFormComponent } from './pages/initial-form/initial-form.component';
import { InviteFormComponent } from './pages/invite-form/invite-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: InitialFormComponent},
  {path: 'invite', component: InviteFormComponent},
  {path: 'dashboard', component: DashboardComponent},
];
