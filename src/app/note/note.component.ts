import { Component, Input } from '@angular/core';

import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() note: Note;

  markAsDone(event): void {
    this.note._done = true;
  }

  markAsDiscarded(event): void {
    this.note._deleted = true;
  }

  markAsStarred(event): void {
    this.note._starred = true;
  }
}
