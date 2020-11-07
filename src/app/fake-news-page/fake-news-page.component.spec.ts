import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsPageComponent } from './fake-news-page.component';

describe('FakeNewsPageComponent', () => {
  let component: FakeNewsPageComponent;
  let fixture: ComponentFixture<FakeNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
