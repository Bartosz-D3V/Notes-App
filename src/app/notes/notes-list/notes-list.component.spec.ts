import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from '../note/note.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesListComponent, NoteComponent],
      imports: [HttpModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
