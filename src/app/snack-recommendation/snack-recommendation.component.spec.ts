import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackRecommendationComponent } from './snack-recommendation.component';

describe('SnackRecommendationComponent', () => {
  let component: SnackRecommendationComponent;
  let fixture: ComponentFixture<SnackRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
