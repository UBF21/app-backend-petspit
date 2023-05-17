import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPageListComponent } from './pedido-page-list.component';

describe('PedidoPageListComponent', () => {
  let component: PedidoPageListComponent;
  let fixture: ComponentFixture<PedidoPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
