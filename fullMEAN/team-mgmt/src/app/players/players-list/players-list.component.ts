import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private playerService: PlayerService, 
    private router: Router
  ) { }

  ngOnInit() {
    console.log('player-list component: getting players')
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  onDelete(playerID: string){
    console.log('delete player from players-list component', playerID);
    this.playerService.deletePlayer(playerID).subscribe(
      removedPlayer => {
        this.players = this.players.filter(rp => rp._id !== playerID);
        this.router.navigateByUrl('/players/list');
      }
    );
  }

}