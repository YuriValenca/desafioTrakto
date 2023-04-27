import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ModulesPageComponent } from './components/modules-page/modules-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ModuleComponent } from './components/module/module.component';
import { MaterialDidaticoComponent } from './components/material-didatico/material-didatico.component';
import { TraktoEduPageComponent } from './components/trakto-edu-page/trakto-edu-page.component';

const appRoutes: Routes = [
  { path: 'modules', component: ModulesPageComponent },
  { path: 'trakto-edu', component: TraktoEduPageComponent },
  { path: 'material-didatico', component: MaterialDidaticoComponent },
  { path: '', component: LoginPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ModulesPageComponent,
    HeaderComponent,
    ModuleComponent,
    MaterialDidaticoComponent,
    TraktoEduPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
