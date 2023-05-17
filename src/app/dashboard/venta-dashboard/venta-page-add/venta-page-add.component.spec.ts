import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPageAddComponent } from './venta-page-add.component';

describe('VentaPageAddComponent', () => {
  let component: VentaPageAddComponent;
  let fixture: ComponentFixture<VentaPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
