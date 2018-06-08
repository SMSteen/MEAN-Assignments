import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { PlayersComponent } from './players/players.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersNewComponent } from './players/players-new/players-new.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: PlayersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PlayersListComponent,
        pathMatch: 'full'
      },
      {
        path: 'addplayer',
        component: PlayersNewComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'status/game/:gameID',
    component: GamesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'players/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
