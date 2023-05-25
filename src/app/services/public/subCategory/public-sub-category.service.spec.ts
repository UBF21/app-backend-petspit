import { TestBed } from '@angular/core/testing';

import { PublicSubCategoryService } from './public-sub-category.service';

describe('PublicSubCategoryService', () => {
  let service: PublicSubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicSubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
