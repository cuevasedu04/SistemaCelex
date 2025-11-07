import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBoleta } from './registro-boleta';

describe('RegistroBoleta', () => {
  let component: RegistroBoleta;
  let fixture: ComponentFixture<RegistroBoleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroBoleta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroBoleta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
