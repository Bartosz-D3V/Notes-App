import { Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as spies from 'chai-spies';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular/material';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../notes-service/note.service';
import { Note } from '../note/note';

const expect = chai.expect;
const assert = chai.assert;
chai.use(spies);
describe('NotesListComponent', () => {
  let noteListComponent: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;
  const mockResponse: Object = {
    data: [
      new Note(101, 'Example title 1', 'Example description 1', false, false, false),
      new Note(102, 'Example title 2', 'Example description 2', true, false, false),
      new Note(103, 'Example title 3', 'Example description 3', false, true, false),
      new Note(104, 'Example title 4', 'Example description 4', false, false, true),
      new Note(105, 'Example title 5', 'Example description 5', true, true, false),
      new Note(106, 'Example title 6', 'Example description 6', false, true, true),
      new Note(107, 'Example title 7', 'Example description 7', true, false, true),
      new Note(108, 'Example title 8', 'Example description 8', true, true, true),
    ]
  };

  @Injectable()
  class FakeNoteService {
    getNotes(): any {
      return Observable.of(mockResponse);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotesListComponent,
        NoteComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        MdCardModule
      ],
      providers: [{
        provide: NoteService, useClass: FakeNoteService
      }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    noteListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    assert.isDefined(noteListComponent);
  });

  it('should create', () => {
    expect(noteListComponent).to.be.an('object');
  });

  describe('retrieveNotes method', () => {
    let spy;

    afterEach(() => {
      spy.reset();
    });

    it('should trigger getRemainingNotes if remaining was passed', () => {
      spyOn(noteListComponent, 'retrieveNotes');
      spy = chai.spy.on(noteListComponent, 'retrieveNotes');
      noteListComponent.filter = 'remaining';
      noteListComponent.retrieveNotes();

      expect(spy).to.have.been.called.once;
    });

    it('should trigger getStarredNotes if starred was passed', () => {
      spyOn(noteListComponent, 'getStarredNotes');
      spy = chai.spy.on(noteListComponent, 'getStarredNotes');
      noteListComponent.filter = 'starred';
      noteListComponent.getStarredNotes();

      expect(spy).to.have.been.called.once;
    });

    it('should trigger getDoneNotes if done was passed', () => {
      spyOn(noteListComponent, 'getDoneNotes');
      spy = chai.spy.on(noteListComponent, 'getDoneNotes');
      noteListComponent.filter = 'done';
      noteListComponent.getDoneNotes();

      expect(spy).to.have.been.called.once;
    });

    it('should trigger getDeletedNotes if trash was passed', () => {
      spyOn(noteListComponent, 'getDeletedNotes');
      spy = chai.spy.on(noteListComponent, 'getDeletedNotes');
      noteListComponent.filter = 'trash';
      noteListComponent.getDeletedNotes();

      expect(spy).to.have.been.called.once;
    });
  });

  describe('getter method', () => {
    it('getRemainingNotes should return notes that only property is remaining', () => {
      noteListComponent.getRemainingNotes();
      const remainingNotes = noteListComponent.notes;

      expect(remainingNotes).length(1);
    });
  });

});
