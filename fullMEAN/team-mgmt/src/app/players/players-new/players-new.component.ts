import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PlayerService } from '../../player.service'
import { Player } from '../../player';

@Component({
  selector: 'app-players-new',
  templateUrl: './players-new.component.html',
  styleUrls: ['./players-new.component.css']
})
export class PlayersNewComponent implements OnInit {
  player = new Player();

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    
    console.log('players-new component: adding player', this.player);
    this.playerService.addPlayer(this.player).subscribe(
      newPlayer => {
        console.log('players-new component: successfully added a new player', newPlayer)
        //redirect to player list
        this.router.navigateByUrl('/players/list');
      },
      error => {
        console.log('Ooops, something went wrong')
      }
    );
  }
  
}
