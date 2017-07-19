import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { expect, assert } from 'chai';

import { NoteComponent } from './note.component';
import { Note } from './note';


describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent],
      imports: [HttpModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const note: Note = new Note(1, 'Test title', 'Test description');
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
    it('markAsDone method should set done parameter to true', () => {
      component.markAsDone();
      expect(component.note._done).to.be.true;
    });

    it('markAsDiscarded method should set discarded parameter to true', () => {
      component.markAsDiscarded();
      expect(component.note._deleted).to.be.true;
    });

    it('markAsStarred method should set starred parameter to true', () => {
      component.markAsStarred();
      expect(component.note._starred).to.be.true;
    });
  });
});
