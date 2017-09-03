import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as spies from 'chai-spies';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular/material';

import 'rxjs/add/observable/of';

import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from '../note/note.component';
import { NoteService } from '../notes-service/note.service';
import { Note } from '../note/note';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
    };

    update(note: Note): Observable<any> {
      return Observable.of(null);
    };
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
      noteListComponent.retrieveNotes();
      expect(spy).to.have.been.called.once;
    });

    it('should trigger getDoneNotes if done was passed', () => {
      spyOn(noteListComponent, 'getDoneNotes');
      spy = chai.spy.on(noteListComponent, 'getDoneNotes');
      noteListComponent.filter = 'done';
      noteListComponent.retrieveNotes();
      expect(spy).to.have.been.called.once;
    });

    it('should trigger getDeletedNotes if trash was passed', () => {
      spyOn(noteListComponent, 'getDeletedNotes');
      spy = chai.spy.on(noteListComponent, 'getDeletedNotes');
      noteListComponent.filter = 'trash';
      noteListComponent.retrieveNotes();
      expect(spy).to.have.been.called.once;
    });
  });

  describe('public method', () => {
    it('getRemainingNotes should return notes that only property is remaining', () => {
      noteListComponent.getRemainingNotes();
      const remainingNotes = noteListComponent.notes;
      expect(remainingNotes).length(1);
    });

    it('getStarredNotes should return notes that only property is starred', () => {
      noteListComponent.getStarredNotes();
      const starredNotes = noteListComponent.notes;
      expect(starredNotes).length(1);
    });

    it('getDoneNotes should return notes that only property is done', () => {
      noteListComponent.getDoneNotes();
      const doneNotes = noteListComponent.notes;
      expect(doneNotes).length(1);
    });

    it('getDeletedNotes should return notes that only property is deleted', () => {
      noteListComponent.getDeletedNotes();
      const deletedNotes = noteListComponent.notes;
      expect(deletedNotes).length(2);
    });

    it('updateNote should invoke update method in the service', () => {
      const spy = chai.spy.on(noteListComponent, 'updateNote');
      const note: Note = new Note(999, 'Test title', 'Test description');
      noteListComponent.updateNote(note);
      expect(spy).to.have.been.called.once;
    });
  });
});
