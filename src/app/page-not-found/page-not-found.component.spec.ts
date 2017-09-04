import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

const expect = chai.expect;
const assert = chai.assert;
describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    assert.isDefined(component);
  });
});
