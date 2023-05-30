import { TestBed } from '@angular/core/testing';

import { PublicEtapaVidaService } from './public-etapa-vida.service';

describe('PublicEtapaVidaService', () => {
  let service: PublicEtapaVidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicEtapaVidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
