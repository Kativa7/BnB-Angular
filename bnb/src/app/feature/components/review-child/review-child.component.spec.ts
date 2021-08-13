import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewChildComponent } from './review-child.component';

describe('ReviewChildComponent', () => {
  let component: ReviewChildComponent;
  let fixture: ComponentFixture<ReviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
