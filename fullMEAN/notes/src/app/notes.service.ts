import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes$ = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getNotes(){
    this._http.get('http://localhost:8000/api/notes').subscribe(
      (note: any[]) => { this.notes$.next(note); }
    )
  }

  addNote(newNote: any){
    this._http.post('http://localhost:8000/api/notes', newNote)
      .subscribe(
        (response) => { this.getNotes() }
      );
  }

}