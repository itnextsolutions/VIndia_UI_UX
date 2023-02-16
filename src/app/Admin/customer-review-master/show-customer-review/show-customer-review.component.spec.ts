import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerReviewComponent } from './show-customer-review.component';

describe('ShowCustomerReviewComponent', () => {
  let component: ShowCustomerReviewComponent;
  let fixture: ComponentFixture<ShowCustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustomerReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
