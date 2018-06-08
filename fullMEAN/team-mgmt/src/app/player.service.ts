import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../app/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Player;
  baseURL: string = `/api/players/`

  constructor(private _http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    console.log(`getting all players in service`)
    return this._http.get<Player[]>(this.baseURL) 
  }

  addPlayer(newPlayer): Observable<Player> {
    console.log(`adding in service: player ${newPlayer}`)
    return this._http.post<Player>(this.baseURL, newPlayer);
  }

  updatePlayer(player: Player, status: string,  game: number): Observable<Player> {
    console.log(`updating player in service: player ${player.name}`)
    this.player = player;
    //change the player status
    if(game === 1) {
      this.player.status.game1 = status;
    } else if (game === 2) {
      this.player.status.game2 = status;
    } else {
      this.player.status.game3 = status;
    }
    console.log(`updating in service: ${this.player.name}'s status is now ${status} for game ${game}`);
    // submit updated player in put request
    return this._http.put<Player>(this.baseURL + this.player._id, this.player);
  }

  deletePlayer(playerID: string): Observable<Player> {
    console.log(this.baseURL + playerID)
    console.log(`deleting in service: player ${playerID}`)
    return this._http.delete<Player>(this.baseURL + playerID);
  }
}