import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Note } from '../note/note';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });
  private options: RequestOptions = new RequestOptions({
    headers: this.headers,
  });
  private notePublished: Subject<Note> = new Subject<Note>();
  publishedNote$ = this.notePublished.asObservable();

  constructor(private http: Http) {
  }

  public publishNote(note: Note): void {
    this.notePublished.next(note);
  }

  getNotes(): Observable<Array<Note>> {
    return this.http
      .get(this.notesUrl, this.options)
      .map((response) => <Note[]> response.json());
  }

  update(note: Note): Observable<Array<Note>> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note[]> response.json());
  }

  create(id: number, title: string, description: string): Observable<Array<Note>> {
    const url = `${this.notesUrl}/${id}`;
    const note: Note = new Note(id, title, description);
    this.publishNote(note);
    return this.http
      .post(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note[]> response.json());
  }

}
