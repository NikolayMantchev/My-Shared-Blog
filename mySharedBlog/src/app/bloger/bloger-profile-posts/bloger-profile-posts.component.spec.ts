import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerProfilePostsComponent } from './bloger-profile-posts.component';

describe('BlogerProfilePostsComponent', () => {
  let component: BlogerProfilePostsComponent;
  let fixture: ComponentFixture<BlogerProfilePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogerProfilePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogerProfilePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
