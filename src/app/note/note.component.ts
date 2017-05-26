import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Note[];
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  getNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => this.notes = notes)
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getNotes();
    console.log(this.notes)
  }

}
