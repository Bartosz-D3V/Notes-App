import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkOnGithubComponent } from './fork-on-github.component';

describe('ForkOnGithubComponent', () => {
  let component: ForkOnGithubComponent;
  let fixture: ComponentFixture<ForkOnGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkOnGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkOnGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
