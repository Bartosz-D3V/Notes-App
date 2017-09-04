import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as spies from 'chai-spies';

import { NoteComponent } from './note.component';
import { Note } from './note';
import { MdCardModule } from '@angular/material';

const assert = chai.assert;
const expect = chai.expect;
chai.use(spies);
describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  let note: Note;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent],
      imports: [HttpModule, FormsModule, MdCardModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    note = new Note(1, 'Test title', 'Test description');
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = note;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    assert.isDefined(NoteComponent);
  });

  it('should be created', () => {
    expect(component).to.be.an('object');
  });

  describe('public API', () => {

    beforeEach(() => {
      spy = chai.spy.on(component.change, 'emit');
    });

    it('toggleDone method should toggle done parameter', () => {
      component.toggleDone();
      expect(component.note._done).to.be.true;
      component.toggleDone();
      expect(component.note._done).to.be.false;
      expect(spy).to.have.been.called.twice;
    });

    it('toggleDiscarded method should set discarded parameter to true', () => {
      component.toggleDiscarded();
      expect(component.note._deleted).to.be.true;
      component.toggleDiscarded();
      expect(component.note._deleted).to.be.false;
      expect(spy).to.have.been.called.twice;
    });

    it('toggleStarred method should set starred parameter to true', () => {
      component.toggleStarred();
      expect(component.note._starred).to.be.true;
      component.toggleStarred();
      expect(component.note._starred).to.be.false;
      expect(spy).to.have.been.called.twice;
    });

    it('should emit note when updateNote was invoked', () => {
      component.updateNote();
      expect(spy).to.have.been.called.once;
    });
  });
});
