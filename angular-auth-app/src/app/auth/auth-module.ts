import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';
import { Auth } from './auth';



@NgModule({
  declarations: [
    Auth
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule 
  ]
})
export class AuthModule { }
