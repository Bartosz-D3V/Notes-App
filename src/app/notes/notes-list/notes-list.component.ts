import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';
import { NotesList } from './notes-list';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  providers: [NoteService],
})
export class NotesListComponent implements OnInit, NotesList {

  @Input()
  filter: string;
  private notes: Note[];
  private error: any;

  constructor(private noteService: NoteService) {
  }

  getRemainingNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            !note._done && !note._deleted && !note._starred),
        error => this.error = error
      );
  }

  getStarredNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._starred && !note._deleted),
        error => this.error = error
      );
  }

  getDoneNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._done && !note._deleted && !note._starred),
        error => this.error = error
      );
  }

  getDeletedNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._deleted),
        error => this.error = error
      );
  }

  updateNote(note): void {
    this.noteService
      .update(note);
  }

  retrieveNotes(): void {
    switch (this.filter) {
      case 'remaining':
        this.getRemainingNotes();
        break;
      case 'starred':
        this.getStarredNotes();
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
