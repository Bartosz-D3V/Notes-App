import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from '../note/note';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: [Note] = [
      new Note(1, 'Task of the day!', 'Buy a milk.'),
      new Note(2, 'If I will find time...', 'Go & buy groceries.')
    ];
    return {notes};
  }
}
