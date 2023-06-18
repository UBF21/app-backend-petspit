import { TestBed } from '@angular/core/testing';

import { UploadStorageImageService } from './upload-storage-image.service';

describe('UploadStorageImageService', () => {
  let service: UploadStorageImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadStorageImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
