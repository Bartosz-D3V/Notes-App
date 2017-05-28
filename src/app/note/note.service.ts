import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from './note';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';

  constructor(private http: Http) {}

  getNotes(): Promise<Array<Note>> {
    return this.http
      .get(this.notesUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Note[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
