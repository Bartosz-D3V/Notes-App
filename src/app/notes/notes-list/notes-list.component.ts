import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';
import { EmitterService } from '../emitter-service/emitter.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit, OnChanges {

  @Input()
  filter: string;

  public addId = 'add-note-event';
  public notes: Array<Note>;

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.retrieveNotes();
  }

  ngOnChanges() {
    EmitterService.get(this.addId).subscribe((note: Note) => {
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
            note._starred && !note._deleted)
      );
  }

  getDoneNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            note._done && !note._deleted && !note._starred)
      );
  }

  getDeletedNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes =>
          this.notes = notes['data'].filter((note) =>
            note._deleted)
      );
  }

  updateNote(note): void {
    this.noteService
      .update(note)
      .subscribe(() => {
        const updateNoteIndex = this.notes.indexOf(this.notes.find((element) => {
          return note.id === element.id;
        }));
        this.notes.splice(updateNoteIndex, 1);
        this.notes.splice(updateNoteIndex, 0, note);
        this.retrieveNotes();
      });
  }

}
