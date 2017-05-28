export class Note {
  id: number;
  title: string;
  description: string;
  starred = false;

  constructor(id: number, title: string, description: string, starred: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.starred = starred;
  }
}
