import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
   
  ],
  declarations: [
    AppComponent,
   
 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }