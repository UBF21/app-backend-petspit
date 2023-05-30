import { TestBed } from '@angular/core/testing';

import { PublictamanioRazaService } from './publictamanio-raza.service';

describe('PublictamanioRazaService', () => {
  let service: PublictamanioRazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublictamanioRazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
