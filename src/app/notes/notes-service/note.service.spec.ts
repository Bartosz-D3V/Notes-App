import { ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import * as spies from 'chai-spies';

import { NoteService } from './note.service';
import { Note } from '../note/note';

const expect = chai.expect;
const assert = chai.assert;
chai.use(spies);
describe('NoteService', () => {

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

  describe('getNotes method', () => {

    let getSpy;
    let mockResponse;

    beforeEach(() => {
      getSpy = chai.spy.on(this.noteService.http, 'get');
      mockResponse = {
        data: [
          new Note(1, 'Task of the day!', 'Buy a milk.'),
          new Note(2, 'If I will find time...', 'Go & buy groceries.')
        ]
      };
    });

    it('should query current service url', () => {
      this.noteService.getNotes();
      assert.isDefined(this.lastConnection);
      expect(this.lastConnection.request.url).to.equal('app/notes');
      expect(getSpy).to.have.been.called.once;
    });

    it('should return Observable with notes', fakeAsync(() => {
      let result: String[];
      this.noteService.getNotes().subscribe((notes: String[]) => result = notes);
      this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse),
      })));
      tick();
      expect(result['data'].length).to.equal(2);
      expect(result['data'][0]).to.deep.equal(mockResponse['data'][0]);
      expect(result['data'][1]).to.deep.equal(mockResponse['data'][1]);
      expect(getSpy).to.have.been.called.once;
    }));

    it('should throw error while server is down', fakeAsync(() => {
      let result: String[];
      let catchedError: any;
      this.noteService.getNotes()
        .subscribe((notes: String[]) => result = notes,
          (error: any) => catchedError = error);
      this.lastConnection.mockError(new Response(new ResponseOptions({
        status: 404,
        statusText: 'URL not Found',
      })));
      tick();
      assert.isUndefined(result);
      assert.isDefined(catchedError);
      expect(getSpy).to.have.been.called.once;
    }));
  });

  describe('create method', () => {
    let postSpy;

    beforeEach(() => {
      postSpy = chai.spy.on(this.noteService.http, 'post');
    });

    it('should create new note', fakeAsync(() => {
      const mockNote = new Note(33, 'Test title', 'Test description');
      let result: Note;
      this.noteService.create(mockNote).subscribe(
        (response: Object) => result = response['data']
      );
      this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify({data: mockNote}),
      })));
      tick();
      expect(result).to.deep.equal(mockNote);
      expect(postSpy).to.have.been.called.once;
    }));

    it('should throw error if server is down', fakeAsync(() => {
      const mockNote = new Note(33, 'Test title', 'Test description');
      let result: Note;
      let catchedError: any;
      this.noteService.create(mockNote).subscribe(
        (response: Object) => result = response['data'],
        (error: any) => catchedError = error);
      this.lastConnection.mockError(new Response(new ResponseOptions({
        status: 404,
        statusText: 'URL not Found',
      })));
      tick();
      assert.isUndefined(result);
      assert.isDefined(catchedError);
      expect(postSpy).to.have.been.called.once;
    }));
  });
});
