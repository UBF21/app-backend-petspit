import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageAddComponent } from './product-page-add.component';

describe('ProductPageAddComponent', () => {
  let component: ProductPageAddComponent;
  let fixture: ComponentFixture<ProductPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
