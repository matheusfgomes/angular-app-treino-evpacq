import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TesteComponent} from './components-test/component-test';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],

  declarations: [ AppComponent, TesteComponent ],
  
  providers:[],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
