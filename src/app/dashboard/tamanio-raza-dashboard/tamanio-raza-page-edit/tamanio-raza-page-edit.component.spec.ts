import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanioRazaPageEditComponent } from './tamanio-raza-page-edit.component';

describe('TamanioRazaPageEditComponent', () => {
  let component: TamanioRazaPageEditComponent;
  let fixture: ComponentFixture<TamanioRazaPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamanioRazaPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamanioRazaPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
