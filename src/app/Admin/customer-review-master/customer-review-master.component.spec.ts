import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewMasterComponent } from './customer-review-master.component';

describe('CustomerReviewMasterComponent', () => {
  let component: CustomerReviewMasterComponent;
  let fixture: ComponentFixture<CustomerReviewMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReviewMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
