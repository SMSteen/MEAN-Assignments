import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote = {};


  constructor(private _notesService: NotesService) { 
  }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    // event.preventDefault();
    console.log('submitting form', form.value);

    //temp action
    this._notesService.addNote(this.newNote);

    this.newNote ={};
    form.reset();
  }

}