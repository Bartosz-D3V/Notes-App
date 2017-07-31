import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from '../note/note';

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

  getNotes(): Promise<Array<Note>> {
    return this.http
      .get(this.notesUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Note[];
      })
      .catch(NoteService.handleError);
  }

  update(note: Note): Promise<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), {headers: this.headers})
      .toPromise()
      .then(() => note)
      .catch(NoteService.handleError);
  }

  create(title: string, description: string): void {
    const lastNoteId = this.getNotes().then(notes => {
      return notes.length;
    });
    const note: Note = new Note(5, title, description);
    this.http
      .post(this.notesUrl, JSON.stringify(note))
      .toPromise()
      .then(() => note)
      .catch(NoteService.handleError);
  }

}
