import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaPageEditComponent } from './marca-page-edit.component';

describe('MarcaPageEditComponent', () => {
  let component: MarcaPageEditComponent;
  let fixture: ComponentFixture<MarcaPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
