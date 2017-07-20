import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.scss'],
})
export class AddNoteDialogComponent {

  private title = 'What you would like to do?';

  constructor(public dialogRef: MdDialogRef<AddNoteDialogComponent>) {
  }

}
