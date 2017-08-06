import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Note } from '../note/note';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';
  private headers = new Headers({
    'Content-Type': 'application/json',
  });

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  }

  getNotes(): Observable<Array<Note>> {
    return this.http
      .get(this.notesUrl)
      .map((response) => <Note[]> response.json());
  }

  update(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), {headers: this.headers})
      .map((response) => <Note> response.json());
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
