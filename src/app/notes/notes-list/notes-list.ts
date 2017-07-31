import { Note } from '../note/note';

export interface NotesList {

  getRemainingNotes(): void;

  getStarredNotes(): void;

  getDoneNotes(): void;

  getDeletedNotes(): void;

  updateNote(note: Note): void;

}
