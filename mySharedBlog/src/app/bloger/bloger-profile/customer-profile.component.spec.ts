import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerProfileComponent } from './bloger-profile.component';

describe('BlogerProfileComponent', () => {
  let component: BlogerProfileComponent;
  let fixture: ComponentFixture<BlogerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
