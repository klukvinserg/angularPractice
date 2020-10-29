import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { HomeSecondComponent } from './home-second/home-second.component';


@NgModule({
  declarations: [HomeCompanyComponent, HomeSecondComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
