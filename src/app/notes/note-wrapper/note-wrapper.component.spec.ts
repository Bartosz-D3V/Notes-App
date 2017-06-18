import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWrapperComponent } from './note-wrapper.component';

describe('NoteWrapperComponent', () => {
  let component: NoteWrapperComponent;
  let fixture: ComponentFixture<NoteWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteWrapperComponent ]
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
