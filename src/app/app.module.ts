import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { DataDrivenComponent } from './pages/data-driven/data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // For Template Driven Forms
    ReactiveFormsModule, // For Data/Model Driven Forms
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
