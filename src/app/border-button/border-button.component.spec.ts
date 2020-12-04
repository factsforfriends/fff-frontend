import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderButtonComponent } from './border-button.component';

describe('BorderButtonComponent', () => {
  let component: BorderButtonComponent;
  let fixture: ComponentFixture<BorderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
