import { Note } from '../note/note';

export class InMemoryDatabase {
  createDb(): Note[] {
    const notes: Note[] = [
      new Note(1, 'Task of the day!', 'Buy a milk.', true),
      new Note(2, 'If I will find time...', 'Go & buy groceries.', false),
    ];
    return notes;
  }
}
