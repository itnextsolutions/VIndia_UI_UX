import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupvalueComponent } from './lookupvalue.component';

describe('LookupvalueComponent', () => {
  let component: LookupvalueComponent;
  let fixture: ComponentFixture<LookupvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
