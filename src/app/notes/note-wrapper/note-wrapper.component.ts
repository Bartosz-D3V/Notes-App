import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-wrapper',
  templateUrl: './note-wrapper.component.html',
})
export class NoteWrapperComponent implements OnInit, OnDestroy {

  filter: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.filter = params['status'] || 'remaining';
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
