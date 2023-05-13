import { TestBed } from '@angular/core/testing';

import { PublicUploadService } from './public-upload.service';

describe('PublicUploadService', () => {
  let service: PublicUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
