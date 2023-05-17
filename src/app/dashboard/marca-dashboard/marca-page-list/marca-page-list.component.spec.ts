import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaPageListComponent } from './marca-page-list.component';

describe('MarcaPageListComponent', () => {
  let component: MarcaPageListComponent;
  let fixture: ComponentFixture<MarcaPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
