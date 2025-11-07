import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFichaAlumno } from './registro-ficha-alumno';

describe('RegistroFichaAlumno', () => {
  let component: RegistroFichaAlumno;
  let fixture: ComponentFixture<RegistroFichaAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroFichaAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFichaAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
