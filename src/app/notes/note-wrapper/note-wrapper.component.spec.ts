import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { expect, assert } from 'chai';

import { NoteWrapperComponent } from './note-wrapper.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteButtonComponent } from '../add-note-button/add-note-button.component';
import { NoteComponent } from '../note/note.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdIconModule } from '@angular/material';
import { NoteService } from '../notes-service/note.service';

describe('NoteWrapperComponent', () => {
  let component: NoteWrapperComponent;
  let fixture: ComponentFixture<NoteWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NoteWrapperComponent,
        NotesListComponent,
        AddNoteButtonComponent,
        NoteComponent
      ],
      imports: [
        RouterTestingModule,
        HttpModule,
        FormsModule,
        MdIconModule,
        MdDialogModule
      ],
      providers: [NoteService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    assert.isDefined(component);
  });

  it('should create', () => {
    expect(component).to.be.an('object');
  });
});
