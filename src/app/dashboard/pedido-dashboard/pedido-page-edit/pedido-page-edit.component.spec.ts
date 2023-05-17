import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPageEditComponent } from './pedido-page-edit.component';

describe('PedidoPageEditComponent', () => {
  let component: PedidoPageEditComponent;
  let fixture: ComponentFixture<PedidoPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
