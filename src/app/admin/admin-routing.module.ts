import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { ModulesPageComponent } from '../components/modules-page/modules-page.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'modules', component: ModulesPageComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
