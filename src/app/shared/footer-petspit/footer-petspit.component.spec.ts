import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPetspitComponent } from './footer-petspit.component';

describe('FooterPetspitComponent', () => {
  let component: FooterPetspitComponent;
  let fixture: ComponentFixture<FooterPetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
