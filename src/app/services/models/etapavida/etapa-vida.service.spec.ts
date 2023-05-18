import { TestBed } from '@angular/core/testing';

import { EtapaVidaService } from './etapa-vida.service';

describe('EtapaVidaService', () => {
  let service: EtapaVidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapaVidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
