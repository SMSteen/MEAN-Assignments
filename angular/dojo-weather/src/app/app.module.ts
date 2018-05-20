import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WilmingtonComponent } from './location/wilmington.component';
import { SeattleComponent } from './location/seattle.component';
import { SanjoseComponent } from './location/sanjose.component';
import { BurbankComponent } from './location/burbank.component';
import { DallasComponent } from './location/dallas.component';
import { DcComponent } from './location/dc.component';
import { ChicagoComponent } from './location/chicago.component';

import { AppRoutingModule } from './app.routing';
import { WeatherdataService } from './weatherdata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    WilmingtonComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }