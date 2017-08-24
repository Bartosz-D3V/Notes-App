import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { expect, assert } from 'chai';
import * as spies from 'chai-spies';

import { NoteService } from './note.service';
import {
  BaseRequestOptions, ConnectionBackend, Http, HttpModule, RequestOptions, ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ReflectiveInjector } from '@angular/core';

chai.use(spies);
describe('NoteService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        NoteService,
        MockBackend,
        {provide: XHRBackend, useClass: MockBackend},
      ]
    });
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

  it('getNotes() should return Subscription', () => {
    let res;
    this.noteService.getNotes((resp) => {
      res = resp;
    });
    console.log(res);
  });


});
