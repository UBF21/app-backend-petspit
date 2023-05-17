import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaVidaPageListComponent } from './etapa-vida-page-list.component';

describe('EtapaVidaPageListComponent', () => {
  let component: EtapaVidaPageListComponent;
  let fixture: ComponentFixture<EtapaVidaPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaVidaPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaVidaPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
