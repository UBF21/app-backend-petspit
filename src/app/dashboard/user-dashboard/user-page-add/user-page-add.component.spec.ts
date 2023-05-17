import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageAddComponent } from './user-page-add.component';

describe('UserPageAddComponent', () => {
  let component: UserPageAddComponent;
  let fixture: ComponentFixture<UserPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
