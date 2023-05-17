import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryPageListComponent } from './subcategory-page-list.component';

describe('SubcategoryPageListComponent', () => {
  let component: SubcategoryPageListComponent;
  let fixture: ComponentFixture<SubcategoryPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
