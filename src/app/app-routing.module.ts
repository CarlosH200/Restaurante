import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //Ruta vacia por defecto
  { path: 'dashboard', component: DashboardComponent }, //ruta a pantalla de inicio (dashboard)
  { path: 'login', component: LoginComponent }, //ruta a login con nombre
  { path: 'notfound', component: NotFoundComponent }, //ruta a login con nombre
  {path: '**', component: NotFoundComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
