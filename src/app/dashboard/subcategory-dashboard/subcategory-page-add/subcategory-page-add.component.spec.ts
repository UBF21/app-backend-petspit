import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryPageAddComponent } from './subcategory-page-add.component';

describe('SubcategoryPageAddComponent', () => {
  let component: SubcategoryPageAddComponent;
  let fixture: ComponentFixture<SubcategoryPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
