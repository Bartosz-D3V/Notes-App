import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { expect, assert } from 'chai';

import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from '../note/note.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
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
