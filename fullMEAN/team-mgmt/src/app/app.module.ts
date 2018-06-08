import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PlayerService } from './player.service';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayersNewComponent } from './players/players-new/players-new.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayersNewComponent,
    PlayersListComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
