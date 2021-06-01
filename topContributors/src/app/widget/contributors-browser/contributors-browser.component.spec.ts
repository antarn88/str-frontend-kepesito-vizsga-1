import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsBrowserComponent } from './contributors-browser.component';

describe('ContributorsBrowserComponent', () => {
  let component: ContributorsBrowserComponent;
  let fixture: ComponentFixture<ContributorsBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorsBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
