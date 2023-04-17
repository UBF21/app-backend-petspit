import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePetspitComponent } from './home-page-petspit.component';

describe('HomePagePetspitComponent', () => {
  let component: HomePagePetspitComponent;
  let fixture: ComponentFixture<HomePagePetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagePetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
