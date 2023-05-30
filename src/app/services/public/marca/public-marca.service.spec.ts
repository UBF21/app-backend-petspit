import { TestBed } from '@angular/core/testing';

import { PublicMarcaService } from './public-marca.service';

describe('PublicMarcaService', () => {
  let service: PublicMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
