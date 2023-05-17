import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaVidaPageEditComponent } from './etapa-vida-page-edit.component';

describe('EtapaVidaPageEditComponent', () => {
  let component: EtapaVidaPageEditComponent;
  let fixture: ComponentFixture<EtapaVidaPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaVidaPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaVidaPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
