import { Note } from './note';

const expect = chai.expect;
const assert = chai.assert;
describe('Note', () => {
  it('is a class', () => {
    expect(Note).to.be.a('function');
  });

  it('should be defined', () => {
    const note: Note = new Note(1, '', '');
    assert.isDefined(note);
  });

  it('should create an object with default values', () => {
    const note: Note = new Note(1, '', '');
    expect(note._deleted).to.be.false;
    expect(note._starred).to.be.false;
    expect(note._done).to.be.false;
  });

  it('should create an object with assigned values', () => {
    const note: Note = new Note(1, '', '', true, true, true);
    expect(note._deleted).to.be.true;
    expect(note._starred).to.be.true;
    expect(note._done).to.be.true;
  });
});
