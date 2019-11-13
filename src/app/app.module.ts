import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { ListeLegumeComponent } from './liste-legume/liste-legume.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    ListeLegumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
