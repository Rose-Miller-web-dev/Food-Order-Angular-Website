import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  } from 'src/app/inside/inside-routing.module'
import { HomeComponent } from 'src/app/inside/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
