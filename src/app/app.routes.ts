import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialFormComponent } from './pages/initial-form/initial-form.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: InitialFormComponent}
];
