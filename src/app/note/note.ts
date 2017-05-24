export class Note {
  private _id: number;
  private _title: string;
  private _description: string;
  private _starred = false;

  constructor(id: number, title: string, description: string, starred: boolean) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._starred = starred;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get starred(): boolean {
    return this._starred;
  }

  set starred(value: boolean) {
    this._starred = value;
  }
}
