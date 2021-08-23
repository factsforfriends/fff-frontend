import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFakeNewsComponent } from './about-fake-news.component';

describe('AboutFakeNewsComponent', () => {
  let component: AboutFakeNewsComponent;
  let fixture: ComponentFixture<AboutFakeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFakeNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFakeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
