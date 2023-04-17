import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsPetspitComponent } from './navs-petspit.component';

describe('NavsPetspitComponent', () => {
  let component: NavsPetspitComponent;
  let fixture: ComponentFixture<NavsPetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsPetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsPetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
