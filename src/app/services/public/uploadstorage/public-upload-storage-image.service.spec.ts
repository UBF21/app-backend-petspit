import { TestBed } from '@angular/core/testing';

import { PublicUploadStorageImageService } from './public-upload-storage-image.service';

describe('PublicUploadStorageImageService', () => {
  let service: PublicUploadStorageImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicUploadStorageImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
