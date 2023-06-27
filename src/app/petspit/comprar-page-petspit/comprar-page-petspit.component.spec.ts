import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPagePetspitComponent } from './comprar-page-petspit.component';

describe('ComprarPagePetspitComponent', () => {
  let component: ComprarPagePetspitComponent;
  let fixture: ComponentFixture<ComprarPagePetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarPagePetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarPagePetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
