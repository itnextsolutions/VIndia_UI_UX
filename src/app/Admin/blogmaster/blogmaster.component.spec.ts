import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmasterComponent } from './blogmaster.component';

describe('BlogmasterComponent', () => {
  let component: BlogmasterComponent;
  let fixture: ComponentFixture<BlogmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
