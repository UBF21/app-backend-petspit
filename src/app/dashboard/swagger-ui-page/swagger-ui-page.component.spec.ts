import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerUiPageComponent } from './swagger-ui-page.component';

describe('SwaggerUiPageComponent', () => {
  let component: SwaggerUiPageComponent;
  let fixture: ComponentFixture<SwaggerUiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaggerUiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwaggerUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
