import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../player.service'

//temp
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {

  }

}
