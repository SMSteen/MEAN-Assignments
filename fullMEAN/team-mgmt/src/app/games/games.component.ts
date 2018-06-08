import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  players: Player[] = [];
  player: Player;
  gameNum: Number;
  gameStatus: string;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    //get the players
    console.log('games-component: getting players');
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
    
    //get the id of the selected game
    this.route.paramMap.subscribe(param => {
      this.gameNum = Number(param.get('gameID'));
      if(this.gameNum === 1) {
        this.gameStatus = 'game1';
      } else if(this.gameNum === 2) {
        this.gameStatus = 'game2';
      } else {
        this.gameStatus = 'game3';
      }
      console.log(`games-component, setting gameNum to ${this.gameNum}, gameStatus to ${this.gameStatus}`);
    })
  }

  updateStatus(player: Player, status: string, game: number){
    console.log(`games component: ${player.name} is ${status} for game number ${game}`);
    this.playerService.updatePlayer(player, status, game)
      .subscribe(player => console.log('player has been sucessfully updated', player))
  }
}
