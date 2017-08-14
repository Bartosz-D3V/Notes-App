import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService,
        {
          provide: XHRBackend,
          useClass: MockBackend,
        }
      ],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));
});
