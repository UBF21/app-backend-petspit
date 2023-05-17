import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanioRazaPageListComponent } from './tamanio-raza-page-list.component';

describe('TamanioRazaPageListComponent', () => {
  let component: TamanioRazaPageListComponent;
  let fixture: ComponentFixture<TamanioRazaPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamanioRazaPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamanioRazaPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
