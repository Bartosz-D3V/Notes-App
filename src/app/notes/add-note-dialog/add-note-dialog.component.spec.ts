import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MdDialog, MdDialogModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { expect, assert } from 'chai';

import { AddNoteDialogComponent } from './add-note-dialog.component';
import { NoteService } from '../notes-service/note.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AddNoteDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule,
    HttpModule,
  ],
  providers: [NoteService],
  entryComponents: [AddNoteDialogComponent],
  exports: [AddNoteDialogComponent],
})
class DialogModule {
}

describe('AddNoteDialogComponent', () => {
  let component: AddNoteDialogComponent;
  let dialog: MdDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule, MdDialogModule]
    });
  });

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    const dialogRef = dialog.open(AddNoteDialogComponent);

    component = dialogRef.componentInstance;
  });

  it('should be defined', () => {
    assert.isDefined(component);
  });

  it('should create', () => {
    expect(component).to.be.an('object');
  });
});
