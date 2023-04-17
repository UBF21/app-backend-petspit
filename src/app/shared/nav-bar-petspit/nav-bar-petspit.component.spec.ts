import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPetspitComponent } from './nav-bar-petspit.component';

describe('NavBarPetspitComponent', () => {
  let component: NavBarPetspitComponent;
  let fixture: ComponentFixture<NavBarPetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
