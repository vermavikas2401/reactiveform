import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { SliderComponent } from './slider/slider.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ViewusersComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
