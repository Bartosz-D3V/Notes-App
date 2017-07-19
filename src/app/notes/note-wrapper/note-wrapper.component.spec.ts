import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWrapperComponent } from './note-wrapper.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteButtonComponent } from '../add-note-button/add-note-button.component';
import { NoteComponent } from '../note/note.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

describe('NoteWrapperComponent', () => {
  let component: NoteWrapperComponent;
  let fixture: ComponentFixture<NoteWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteWrapperComponent, NotesListComponent,
        AddNoteButtonComponent, NoteComponent],
      imports: [RouterTestingModule, HttpModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
