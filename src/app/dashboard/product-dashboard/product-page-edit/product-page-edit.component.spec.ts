import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageEditComponent } from './product-page-edit.component';

describe('ProductPageEditComponent', () => {
  let component: ProductPageEditComponent;
  let fixture: ComponentFixture<ProductPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
