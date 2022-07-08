import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { HomeComponent } from './home/home.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gerenciar', component: GerenciarComponent},
  {path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
