export class Note {
  id: number;
  title: string;
  description: string;
  _starred = false;
  _done = false;
  _deleted = false;

  constructor(id: number, title: string, description: string, starred?: boolean, done?: boolean, deleted?: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this._starred = starred ? starred : false;
    this._done = done ? done : false;
    this._deleted = deleted ? deleted : false;
  };

}
