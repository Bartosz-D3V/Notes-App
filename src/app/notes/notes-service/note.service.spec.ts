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
    let error: any;
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      NoteService,
    ]);
    this.noteService = this.injector.get(NoteService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe(
      (connection: any) => this.lastConnection = connection,
      (err: any) => error = err);
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
      let error: any;
      this.noteService.getNotes().subscribe(
        (notes: String[]) => result = notes,
        (err: any) => error = err);
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

    it('should query current service url', () => {
      let error: any;
      let note: Note;
      const mockNote = new Note(33, 'Test title', 'Test description');
      this.noteService.create(mockNote).subscribe(
        (response: Note) => note = response,
        (err: any) => error = err);

      assert.isDefined(this.lastConnection);
      expect(this.lastConnection.request.url).to.equal(`app/notes/${mockNote.id}`);
      expect(postSpy).to.have.been.called.once;
    });

    it('should create new note', fakeAsync(() => {
      let error: any;
      let result: Note;
      const mockNote = new Note(33, 'Test title', 'Test description');
      this.noteService.create(mockNote).subscribe(
        (response: Object) => result = response['data'],
        (err: any) => error = err
      );
      this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify({data: mockNote}),
      })));
      tick();

      assert.isUndefined(error);
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

  describe('update method', () => {
    let putSpy;

    beforeEach(() => {
      putSpy = chai.spy.on(this.noteService.http, 'put');
    });

    it('should query current service url', () => {
      let error: any;
      let result: Note;
      const mockNote = new Note(33, 'Test title', 'Test description');
      this.noteService.update(mockNote).subscribe(
        (response: Object) => result = response['data'],
        (err: any) => error = err
      );

      assert.isDefined(this.lastConnection);
      expect(this.lastConnection.request.url).to.equal(`app/notes/${mockNote.id}`);
      expect(putSpy).to.have.been.called.once;
    });

    it('should update note', fakeAsync(() => {
      let error: any;
      let result: Note;
      const mockNote = new Note(33, 'Test title', 'Test description');
      this.noteService.update(mockNote).subscribe(
        (response: Object) => result = response['data'],
        (err: any) => error = err
      );
      this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify({data: mockNote}),
      })));
      tick();

      assert.isUndefined(error);
      expect(result).to.deep.equal(mockNote);
      expect(putSpy).to.have.been.called.once;
    }));

    it('should throw error if server is down', fakeAsync(() => {
      const mockNote = new Note(33, 'Test title', 'Test description');
      let result: Note;
      let error: any;
      this.noteService.update(mockNote).subscribe(
        (response: Object) => result = response['data'],
        (err: any) => error = err);
      this.lastConnection.mockError(new Response(new ResponseOptions({
        status: 404,
        statusText: 'URL not Found',
      })));
      tick();

      assert.isUndefined(result);
      assert.isDefined(error);
      expect(putSpy).to.have.been.called.once;
    }));
  });
});
