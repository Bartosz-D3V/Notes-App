import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import * as spies from 'chai-spies';

import { NoteService } from './note.service';
import { Note } from '../note/note';

const expect = chai.expect;
const assert = chai.assert;
chai.use(spies);
describe('NoteService', () => {

  const mockResponse = {
    data: [
      new Note(1, 'Task of the day!', 'Buy a milk.'),
      new Note(2, 'If I will find time...', 'Go & buy groceries.')
    ]
  };

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      NoteService,
    ]);
    this.noteService = this.injector.get(NoteService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should be created', () => {
    expect(this.noteService).to.be.an('object');
  });

  it('getNotes() should query current service url', () => {
    this.noteService.getNotes();
    assert.isDefined(this.lastConnection);
    expect(this.lastConnection.request.url).to.equal('app/notes');
  });

  it('getNotes() should return Observable with notes', fakeAsync(() => {
    let result: String[];
    this.noteService.getNotes().subscribe((notes: String[]) => result = notes);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockResponse),
    })));
    tick();
    expect(result['data'].length).to.equal(2);
  }));

});
