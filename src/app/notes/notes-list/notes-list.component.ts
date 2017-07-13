import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../note/note';
import {NoteService} from '../notes-service/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  providers: [NoteService],
})
export class NotesListComponent implements OnInit {

  @Input()
  filter: string;
  private notes: Note[];
  private error: any;

  constructor(private noteService: NoteService) {
    this.noteService = noteService;
  }

  getRemainingNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => {
        this.notes = notes.filter((note) => !note._deleted && !note._done);
      })
      .catch((error) => this.error = error);
  }

  getDoneNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => {
        this.notes = notes.filter((note) => note._done);
      })
      .catch((error) => this.error = error);
  }

  getDeletedNotes(): void {
    this.noteService
      .getNotes()
      .then(notes => {
        this.notes = notes.filter((note) => note._deleted);
      })
      .catch((error) => this.error = error);
  }

  updateNote(note): void {
    this.noteService
      .update(note)
      .catch((error) => this.error = error);
    this.retrieveNotes();
  }

  retrieveNotes(): void {
    switch (this.filter) {
      case 'remaining':
        this.getRemainingNotes();
        break;
      case 'done':
        this.getDoneNotes();
        break;
      case 'trash':
        this.getDeletedNotes();
        break;
    }
  }

  ngOnInit() {
    this.retrieveNotes();
  }

}
