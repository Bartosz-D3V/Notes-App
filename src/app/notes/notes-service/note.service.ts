import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Note } from '../note/note';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });
  private options: RequestOptions = new RequestOptions({
    headers: this.headers,
  });

  private static handleError(error: any): Observable<any> {
    console.log('An error occurred', error);
    throw Observable.throw(error.message || error);
  }

  constructor(private http: Http) {
  }

  getNotes(): Observable<Array<Note>> {
    return this.http
      .get(this.notesUrl, this.options)
      .map((response) => <Note[]> response.json())
      .catch((error: any) => NoteService.handleError(error));
  }

  create(note: Note): Observable<Array<Note>> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .post(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note> response.json())
      .catch((error: any) => Observable.throw(error.json().error));
  }

  update(note: Note): Observable<Array<Note>> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note> response.json())
      .catch((error: any) => Observable.throw(error.json().error));
  }

}
