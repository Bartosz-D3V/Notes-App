import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteButtonComponent } from './add-note-button.component';

describe('AddNoteButtonComponent', () => {
  let component: AddNoteButtonComponent;
  let fixture: ComponentFixture<AddNoteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
