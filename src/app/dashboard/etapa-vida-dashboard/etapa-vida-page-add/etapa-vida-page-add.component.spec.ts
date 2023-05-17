import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaVidaPageAddComponent } from './etapa-vida-page-add.component';

describe('EtapaVidaPageAddComponent', () => {
  let component: EtapaVidaPageAddComponent;
  let fixture: ComponentFixture<EtapaVidaPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaVidaPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaVidaPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
