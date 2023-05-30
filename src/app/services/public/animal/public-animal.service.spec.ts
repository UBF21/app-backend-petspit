import { TestBed } from '@angular/core/testing';

import { PublicAnimalService } from './public-animal.service';

describe('PublicAnimalService', () => {
  let service: PublicAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
