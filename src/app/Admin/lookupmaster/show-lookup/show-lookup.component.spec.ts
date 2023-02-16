import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLookupComponent } from './show-lookup.component';

describe('ShowLookupComponent', () => {
  let component: ShowLookupComponent;
  let fixture: ComponentFixture<ShowLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
