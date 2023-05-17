import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageListComponent } from './user-page-list.component';

describe('UserPageListComponent', () => {
  let component: UserPageListComponent;
  let fixture: ComponentFixture<UserPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
