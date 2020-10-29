import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { HomeSecondComponent } from './home-second/home-second.component';


const routes: Routes = [
  {
    path: '', component: HomeCompanyComponent
  },
  {
    path: 'home-second', component: HomeSecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
