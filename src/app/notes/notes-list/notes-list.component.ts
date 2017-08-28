import { Component, Input, OnChanges } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';
import { EmitterService } from '../emitter-service/emitter.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnChanges {

  @Input()
  filter: string;

  public addId = 'add-note-event';
  public notes: Array<Note>;

  constructor(private noteService: NoteService) {
  }

  ngOnChanges() {
    this.retrieveNotes();
    EmitterService.get(this.addId)
      .subscribe((note: Note) => {
        this.notes.push(note);
      });
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
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            !note._done && !note._deleted && !note._starred)
      );
  }

  getStarredNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            note._starred && !note._done && !note._deleted)
      );
  }

  getDoneNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            note._done && !note._starred && !note._deleted)
      );
  }

  getDeletedNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            note._deleted && !note._starred)
      );
  }

  updateNote(note): void {
    this.noteService
      .update(note)
      .subscribe(() => {
        this.retrieveNotes();
      });
  }

}
