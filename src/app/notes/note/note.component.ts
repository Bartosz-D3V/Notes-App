import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {

  @Input()
  note: Note;
  @Output()
  change: EventEmitter<Note> = new EventEmitter(true);

  toggleDone(): void {
    this.note._done = !this.note._done;
    this.change.emit(this.note);
  }

  toggleDiscarded(): void {
    this.note._deleted = !this.note._deleted;
    this.change.emit(this.note);
  }

  toggleStarred(): void {
    this.note._starred = !this.note._starred;
    this.change.emit(this.note);
  }

  updateNote(): void {
    this.change.emit(this.note);
  }
}
