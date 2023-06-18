import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarritoPageComponent } from './view-carrito-page.component';

describe('ViewCarritoPageComponent', () => {
  let component: ViewCarritoPageComponent;
  let fixture: ComponentFixture<ViewCarritoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarritoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarritoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
