import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { expect, assert } from 'chai';

import { NoteComponent } from './note.component';
import { HttpModule } from '@angular/http';
import { Note } from './note';


describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent],
      imports: [HttpModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    assert.isDefined(NoteComponent);
  });

  it('should be created', () => {
    expect(component).to.be.an('object');
  });

  describe('public API', () => {
    const note: Note = new Note(1, '', '');

    it('markAsDone method should set done parameter to true', () => {
      component.note = note;
      component.markAsDone();
      expect(note._done).to.be.true;
    });

    it('markAsDiscarded method should set discarded parameter to true', () => {
      component.note = note;
      component.markAsDiscarded();
      expect(note._deleted).to.be.true;
    });

    it('markAsStarred method should set starred parameter to true', () => {
      component.note = note;
      component.markAsStarred();
      expect(note._starred).to.be.true;
    });
  });
});
