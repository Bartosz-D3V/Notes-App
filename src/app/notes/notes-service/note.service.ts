import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Note } from '../note/note';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';
  private headers = new Headers({
    'Content-Type': 'application/json',
  });
  private options = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: Http) {
  }

  getNotes(): Observable<Array<Note>> {
    return this.http
      .get(this.notesUrl)
      .map((response) => <Note[]> response.json());
  }

  update(note: Note): Observable<Array<Note>> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note[]> response.json());
  }

  create(title: string, description: string): void {
    // const lastNoteId = this.getNotes().then(notes => {
    //   return notes.length;
    // });
    // const note: Note = new Note(5, title, description);
    // this.http
    //   .post(this.notesUrl, JSON.stringify(note))
    //   .toPromise()
    //   .then(() => note)
    //   .catch(NoteService.handleError);
  }

}
