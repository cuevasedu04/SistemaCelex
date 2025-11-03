import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarGrupo } from './asignar-grupo';

describe('AsignarGrupo', () => {
  let component: AsignarGrupo;
  let fixture: ComponentFixture<AsignarGrupo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarGrupo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarGrupo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
