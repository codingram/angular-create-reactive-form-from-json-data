import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// add the FormsModule, ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFromJsonDataComponent } from './form-from-json-data/form-from-json-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFromJsonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add FormsModule, ReactiveFormsModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
