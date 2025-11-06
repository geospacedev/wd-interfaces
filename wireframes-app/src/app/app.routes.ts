import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/user/:userId', component: UserDetailsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];