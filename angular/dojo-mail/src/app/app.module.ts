import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ImportanceLevelPipe } from './importance-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImportanceLevelPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
