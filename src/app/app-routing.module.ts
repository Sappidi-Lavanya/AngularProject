import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccoutsComponent } from './accouts/accouts.component';
import { GmailsComponent } from './gmails/gmails.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'data',component:DataBindingComponent},
    {path:'cal',component:CalculatorComponent},
    {path:'rect',component:RectangleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'direct',component:DirectivesComponent},
    {path:'pipe',component:PipesComponent},
    {path:'register',component:RegistrationComponent},
    {path:'flip',component:FlipkartComponent},
    {path:'vec',component:VehicleComponent},
    {path:'act',component:AccoutsComponent},
    {path:'mail',component:GmailsComponent},
    {path:'create',component:CreateVehicleComponent},
    {path:'created',component:CreateAccountComponent}
  ]},
  {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
