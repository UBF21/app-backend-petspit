import { TestBed } from '@angular/core/testing';

import { PublicVentaService } from './public-venta.service';

describe('PublicVentaService', () => {
  let service: PublicVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
