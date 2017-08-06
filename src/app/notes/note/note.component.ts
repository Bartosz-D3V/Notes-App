import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from './note';
import { NoteService } from '../notes-service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [NoteService],
})
export class NoteComponent {

  @Input()
  note: Note;

  constructor(private noteService: NoteService) {
  }

  markAsDone(): void {
    this.note._done = true;
  }

  markAsDiscarded(): void {
    this.note._deleted = true;
  }

  markAsStarred(): void {
    this.note._starred = true;
  }

  updateNote(): void {
    this.noteService.update(this.note);
  }
}
