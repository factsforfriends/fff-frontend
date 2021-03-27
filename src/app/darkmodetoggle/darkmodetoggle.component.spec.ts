import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodetoggleComponent } from './darkmodetoggle.component';

describe('DarkmodetoggleComponent', () => {
  let component: DarkmodetoggleComponent;
  let fixture: ComponentFixture<DarkmodetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkmodetoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkmodetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
