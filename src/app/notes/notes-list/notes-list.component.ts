import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../notes-service/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
})
export class NotesListComponent implements OnInit {

  @Input()
  filter: string;
  private notes: Note[];

  constructor(private noteService: NoteService) {
    // this.noteService.publishedNote$.subscribe(
    //   data => this.notes[data.id]  = (data)
    // );
  }

  getRemainingNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            !note._done && !note._deleted && !note._starred)
      );
  }

  getStarredNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._starred && !note._deleted)
      );
  }

  getDoneNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._done && !note._deleted && !note._starred)
      );
  }

  getDeletedNotes(): void {
    this.noteService
      .getNotes()
      .subscribe(
        notes => this.notes = notes['data']
          .filter((note) =>
            note._deleted)
      );
  }

  updateNote(note): void {
    this.noteService
      .update(note)
      .subscribe(
        success => this.retrieveNotes()
      );
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
