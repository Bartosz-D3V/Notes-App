import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note: Note;

  constructor() {
  }

  ngOnInit() {
  }

}
