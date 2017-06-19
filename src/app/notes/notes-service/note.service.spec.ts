import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpModule } from '@angular/http';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
