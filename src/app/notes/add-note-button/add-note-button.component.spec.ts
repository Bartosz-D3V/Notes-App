import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDialogModule, MdIconModule } from '@angular/material';

import { expect, assert } from 'chai';

import { AddNoteButtonComponent } from './add-note-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddNoteButtonComponent', () => {
  let component: AddNoteButtonComponent;
  let fixture: ComponentFixture<AddNoteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MdDialogModule,
        MdIconModule
      ],
      declarations: [AddNoteButtonComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    assert.isDefined(AddNoteButtonComponent);
  });

  it('should be created', () => {
    expect(component).to.be.an('object');
  });
});
