import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageAddComponent } from './category-page-add.component';

describe('CategoryPageAddComponent', () => {
  let component: CategoryPageAddComponent;
  let fixture: ComponentFixture<CategoryPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
