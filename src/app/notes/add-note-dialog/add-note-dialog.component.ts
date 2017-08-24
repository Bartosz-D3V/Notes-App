import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { NoteService } from '../notes-service/note.service';
import { EmitterService } from '../emitter-service/emitter.service';
import { Note } from '../note/note';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.scss'],
})
export class AddNoteDialogComponent {

  public addId = 'add-note-event';
  public widgetTitle = 'What would you like to do?';

  constructor(public dialogRef: MdDialogRef<AddNoteDialogComponent>, private noteService: NoteService) {
  }

  createNote(id: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement): void {
    const note: Note = new Note(+id.value, title.value, description.value);
    this.noteService.create(note).subscribe();
    EmitterService.get(this.addId).emit(note);
  }

  isInvalid(id: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement): boolean {
    return (id.value === '' || title.value === '' || description.value === '');
  }

}
