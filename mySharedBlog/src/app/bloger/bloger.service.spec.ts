import { TestBed } from '@angular/core/testing';

import { BlogerService } from './bloger.service';

describe('BlogerService', () => {
  let service: BlogerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
