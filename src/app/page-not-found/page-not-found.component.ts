import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {

  widgetTitle = '404';
  widgetSubTitle = 'Page you tried to access does not exist.';

}
