import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPageEditComponent } from './venta-page-edit.component';

describe('VentaPageEditComponent', () => {
  let component: VentaPageEditComponent;
  let fixture: ComponentFixture<VentaPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
