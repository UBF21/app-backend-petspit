import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryPageEditComponent } from './subcategory-page-edit.component';

describe('SubcategoryPageEditComponent', () => {
  let component: SubcategoryPageEditComponent;
  let fixture: ComponentFixture<SubcategoryPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
