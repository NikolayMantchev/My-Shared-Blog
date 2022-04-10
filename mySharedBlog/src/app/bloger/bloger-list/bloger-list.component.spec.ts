import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerListComponent } from './bloger-list.component';

describe('BlogerListComponent', () => {
  let component: BlogerListComponent;
  let fixture: ComponentFixture<BlogerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
