import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsPageComponent } from './no-results-page.component';

describe('NoResultsPageComponent', () => {
  let component: NoResultsPageComponent;
  let fixture: ComponentFixture<NoResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
