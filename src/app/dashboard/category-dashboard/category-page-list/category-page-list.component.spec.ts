import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPageListComponent } from './category-page-list.component';

describe('CategoryPageListComponent', () => {
  let component: CategoryPageListComponent;
  let fixture: ComponentFixture<CategoryPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
