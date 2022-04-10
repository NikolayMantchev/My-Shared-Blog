import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerListItemComponent } from './bloger-list-item.component';

describe('BlogerListItemComponent', () => {
  let component: BlogerListItemComponent;
  let fixture: ComponentFixture<BlogerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogerListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
