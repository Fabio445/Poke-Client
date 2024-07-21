import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DexPokeComponent } from './dexpoke/dexpoke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeDetailComponent } from './dexpoke/poke-detail/poke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DexPokeComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
