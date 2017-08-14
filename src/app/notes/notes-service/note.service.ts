import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Note } from '../note/note';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class NoteService {

  private notesUrl = 'app/notes';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });
  private options: RequestOptions = new RequestOptions({
    headers: this.headers,
  });
  private _notes: BehaviorSubject<Array<Note>> = new BehaviorSubject(Array());

  constructor(private http: Http) {
    this.getNotes();
  }

  get notes(): BehaviorSubject<Array<Note>> {
    return this._notes;
  }

  getNotes() {
    return this.http
      .get(this.notesUrl, this.options)
      .map((response) => <Note[]> response.json())
      .subscribe(
        notes => {
          this._notes.next(notes['data']);
        },
        error => console.log(error)
      );
  }

  update(note: Note): Subscription {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note> response.json())
      .subscribe(() => {
          const notes = this._notes.getValue();
          this._notes.next(notes);
        },
        error => console.log(error)
      );
  }

  create(id: number, title: string, description: string): Subscription {
    const url = `${this.notesUrl}/${id}`;
    const note: Note = new Note(id, title, description);
    return this.http
      .post(url, JSON.stringify(note), this.options)
      .map((response: Response) => <Note> response.json())
      .subscribe(() => {
          const notes = this._notes.getValue();
          notes.push(note);
          this._notes.next(notes);
        },
        error => console.log(error)
      );
  }

}
