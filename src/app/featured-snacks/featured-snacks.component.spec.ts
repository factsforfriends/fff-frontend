import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSnacksComponent } from './featured-snacks.component';

describe('FeaturedSnacksComponent', () => {
  let component: FeaturedSnacksComponent;
  let fixture: ComponentFixture<FeaturedSnacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedSnacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
