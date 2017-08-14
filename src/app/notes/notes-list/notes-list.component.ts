import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  @Input()
  filter: string;
  private notes: Note[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.retrieveNotes();
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

  getRemainingNotes(): void {
    this.noteService
      .notes
      .subscribe(
        notes =>
          this.notes = notes.filter((note) =>
            !note._done && !note._deleted && !note._starred)
      );
  }

  getStarredNotes(): void {
    this.noteService
      .notes
      .subscribe(
        notes =>
          this.notes = notes.filter((note) =>
            note._starred && !note._deleted)
      );
  }

  getDoneNotes(): void {
    this.noteService
      .notes
      .subscribe(
        notes =>
          this.notes = notes.filter((note) =>
            note._done && !note._deleted && !note._starred)
      );
  }

  getDeletedNotes(): void {
    this.noteService
      .notes
      .subscribe(
        notes =>
          this.notes = notes.filter((note) =>
            note._deleted)
      );
  }

  updateNote(note): void {
    this.noteService
      .update(note);
  }

}
