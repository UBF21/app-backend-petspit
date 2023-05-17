import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPageListComponent } from './venta-page-list.component';

describe('VentaPageListComponent', () => {
  let component: VentaPageListComponent;
  let fixture: ComponentFixture<VentaPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
