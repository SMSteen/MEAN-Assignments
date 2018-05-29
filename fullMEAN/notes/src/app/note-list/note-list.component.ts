import { Component, OnInit, OnChanges } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  
  constructor(private _notesService: NotesService) { 

  }

  ngOnInit() {
    this._notesService.notes$.subscribe(
      (notes) => { this.notes = notes }
    );
    this._notesService.getNotes();
  }

}
