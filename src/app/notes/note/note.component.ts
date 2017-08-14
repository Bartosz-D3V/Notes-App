import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from './note';
import { NoteService } from '../notes-service/note.service';

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

  markAsDone(): void {
    this.note._done = true;
    this.change.emit(this.note);
  }

  markAsDiscarded(): void {
    this.note._deleted = true;
    this.change.emit(this.note);
  }

  markAsStarred(): void {
    this.note._starred = true;
    this.change.emit(this.note);
  }

  updateNote(): void {
    this.change.emit(this.note);
  }
}
