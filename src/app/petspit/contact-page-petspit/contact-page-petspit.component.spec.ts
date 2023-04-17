import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPagePetspitComponent } from './contact-page-petspit.component';

describe('ContactPagePetspitComponent', () => {
  let component: ContactPagePetspitComponent;
  let fixture: ComponentFixture<ContactPagePetspitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPagePetspitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPagePetspitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
