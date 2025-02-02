import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ChatComponent} from './chat/chat.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, HomeComponent, ChatComponent],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
