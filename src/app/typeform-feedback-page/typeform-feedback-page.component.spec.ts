import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeformFeedbackPageComponent } from './typeform-feedback-page.component';

describe('TypeformFeedbackPageComponent', () => {
  let component: TypeformFeedbackPageComponent;
  let fixture: ComponentFixture<TypeformFeedbackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeformFeedbackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeformFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
