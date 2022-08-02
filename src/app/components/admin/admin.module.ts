import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { AdminRoutingModule } from './admin-routing.module';

//Pages components
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
