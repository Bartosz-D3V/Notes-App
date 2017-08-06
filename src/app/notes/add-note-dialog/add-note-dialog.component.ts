import { Component, EventEmitter, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NoteService } from '../notes-service/note.service';
import { Note } from '../note/note';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.scss'],
  providers: [NoteService],
})
export class AddNoteDialogComponent {

  private widgetTitle = 'What you would like to do?';

  constructor(public dialogRef: MdDialogRef<AddNoteDialogComponent>, private noteService: NoteService) {
  }

  createNote(title: string, description: string): void {
    this.noteService.create(title, description);
  }

  isInvalid(title: string, description: string): boolean {
    return (title === '' || description === '');
  }

}
