import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanioRazaPageAddComponent } from './tamanio-raza-page-add.component';

describe('TamanioRazaPageAddComponent', () => {
  let component: TamanioRazaPageAddComponent;
  let fixture: ComponentFixture<TamanioRazaPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamanioRazaPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamanioRazaPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
