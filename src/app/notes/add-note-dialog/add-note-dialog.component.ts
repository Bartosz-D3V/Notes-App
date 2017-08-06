import { Component, EventEmitter, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NoteService } from '../notes-service/note.service';
import { Note } from '../note/note';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.scss'],
})
export class AddNoteDialogComponent {

  private widgetTitle = 'What you would like to do?';

  constructor(public dialogRef: MdDialogRef<AddNoteDialogComponent>, private noteService: NoteService) {
  }

  createNote(id: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement): void {
    this.noteService.create(+id.value, title.value, description.value).subscribe();
  }

  isInvalid(id: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement): boolean {
    return (id.value === '' || title.value === '' || description.value === '');
  }

}
