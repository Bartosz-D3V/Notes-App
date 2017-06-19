import { Component, Input } from '@angular/core';

import { Note } from './note';
import { NoteService } from '../notes-service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [NoteService],
})
export class NoteComponent {

  @Input() note: Note;


  constructor(private noteService: NoteService) {
  }

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
