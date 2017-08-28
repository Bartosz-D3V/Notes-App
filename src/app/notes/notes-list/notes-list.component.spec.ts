import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as spies from 'chai-spies';

import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from '../note/note.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { NoteService } from '../notes-service/note.service';

const expect = chai.expect;
const assert = chai.assert;
chai.use(spies);
describe('NotesListComponent', () => {
  let noteListComponent: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

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
      providers: [NoteService],
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
  });
});
