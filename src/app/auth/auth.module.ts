import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AuthRoutingModule } from './auth-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
