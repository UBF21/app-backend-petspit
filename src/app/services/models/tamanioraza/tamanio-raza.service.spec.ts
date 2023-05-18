import { TestBed } from '@angular/core/testing';

import { TamanioRazaService } from './tamanio-raza.service';

describe('TamanioRazaService', () => {
  let service: TamanioRazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanioRazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
