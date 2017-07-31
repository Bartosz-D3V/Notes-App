import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.scss'],
})
export class AddNoteButtonComponent {

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddNoteDialogComponent);
  }
}
