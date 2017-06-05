import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.scss']
})
export class AddNoteButtonComponent implements OnInit {

  dialog: any;
  title = 'What you would like to do?';

  ngOnInit() {
    this.dialog = document.querySelector('dialog');
  }

  showModal(event): void {
    this.dialog.showModal();
  }

  closeModal(event): void {
    this.dialog.close();
  }

}
