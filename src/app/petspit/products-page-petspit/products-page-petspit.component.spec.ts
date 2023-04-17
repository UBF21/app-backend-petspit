import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPagePetspitComponent } from './products-page-petspit.component';

describe('ProductsPagePetspitComponent', () => {
  let component: ProductsPagePetspitComponent;
  let fixture: ComponentFixture<ProductsPagePetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPagePetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPagePetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
