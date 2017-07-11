import {expect, assert} from 'chai';

import {Note} from './note';


describe('Note', () => {
  let note: Note;

  beforeAll(() => {
    note = new Note(1, '', '');
  });

  it('is a class', () => {
    expect(Note).to.be.a('function');
  });

  it('should be defined', () => {
    assert.isDefined(note);
  });
});
