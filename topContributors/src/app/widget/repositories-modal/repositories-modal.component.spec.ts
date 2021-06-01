import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesModalComponent } from './repositories-modal.component';

describe('RepositoriesModalComponent', () => {
  let component: RepositoriesModalComponent;
  let fixture: ComponentFixture<RepositoriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
