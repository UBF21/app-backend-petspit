import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRegisterUserComponent } from './public-register-user.component';

describe('PublicRegisterUserComponent', () => {
  let component: PublicRegisterUserComponent;
  let fixture: ComponentFixture<PublicRegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicRegisterUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
