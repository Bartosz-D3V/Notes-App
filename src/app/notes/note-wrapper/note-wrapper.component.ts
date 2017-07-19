import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-wrapper',
  templateUrl: './note-wrapper.component.html',
})
export class NoteWrapperComponent implements OnInit, OnDestroy {

  private filter: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.filter = params['status'] === undefined ? 'remaining' : params['status'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
