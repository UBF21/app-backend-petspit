import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPageAddComponent } from './pedido-page-add.component';

describe('PedidoPageAddComponent', () => {
  let component: PedidoPageAddComponent;
  let fixture: ComponentFixture<PedidoPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
