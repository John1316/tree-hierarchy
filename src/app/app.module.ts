import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './content/home/home.component';
import { NgwWowModule } from 'ngx-wow';
import {  TreeGridModule } from "@syncfusion/ej2-angular-treegrid";
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgwWowModule,
    TreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
