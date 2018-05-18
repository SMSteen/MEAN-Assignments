import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { FarmComponent } from './building/farm.component';
import { CaveComponent } from './building/cave.component';
import { CasinoComponent } from './building/casino.component';
import { HouseComponent } from './building/house.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GolddataService } from './golddata.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    FarmComponent,
    CaveComponent,
    CasinoComponent,
    HouseComponent,
    ActivitiesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [GolddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }