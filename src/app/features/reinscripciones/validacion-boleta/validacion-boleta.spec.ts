import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionBoleta } from './validacion-boleta';

describe('ValidacionBoleta', () => {
  let component: ValidacionBoleta;
  let fixture: ComponentFixture<ValidacionBoleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionBoleta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionBoleta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
