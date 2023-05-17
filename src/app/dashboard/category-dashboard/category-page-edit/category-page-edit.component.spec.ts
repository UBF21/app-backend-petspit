import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageEditComponent } from './category-page-edit.component';

describe('CategoryPageEditComponent', () => {
  let component: CategoryPageEditComponent;
  let fixture: ComponentFixture<CategoryPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
