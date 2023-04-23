import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPagePetspitComponent } from './about-page-petspit.component';

describe('AboutPagePetspitComponent', () => {
  let component: AboutPagePetspitComponent;
  let fixture: ComponentFixture<AboutPagePetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPagePetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPagePetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
