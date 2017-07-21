import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MdDialog, MdDialogModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { expect, assert } from 'chai';

import { AddNoteDialogComponent } from './add-note-dialog.component';


@NgModule({
  declarations: [AddNoteDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule
  ],
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
