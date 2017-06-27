import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingsService } from "./listings/listings.service";
import { EventEditorComponent } from "./listings/event-editor.component";

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    EventEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
