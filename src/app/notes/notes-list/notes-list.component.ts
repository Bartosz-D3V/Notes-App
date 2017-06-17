import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
})
export class NotesListComponent implements OnInit {

  notes: Note[];
  error: any;

  constructor(private noteService: NoteService) {
    this.noteService = noteService;
  }

  getNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => this.notes = notes)
      .catch((error) => this.error = error);
  }

  getApplicableNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => {
        this.notes = notes.filter((note) => !note._deleted && !note._done);
      })
      .catch((error) => this.error = error);
  }

  ngOnInit() {
    this.getNotes();
  }

}
