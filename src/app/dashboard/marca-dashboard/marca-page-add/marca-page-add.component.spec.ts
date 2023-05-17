import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaPageAddComponent } from './marca-page-add.component';

describe('MarcaPageAddComponent', () => {
  let component: MarcaPageAddComponent;
  let fixture: ComponentFixture<MarcaPageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaPageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaPageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
