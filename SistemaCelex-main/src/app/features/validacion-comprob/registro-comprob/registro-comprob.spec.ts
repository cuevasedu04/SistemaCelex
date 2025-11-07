import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComprob } from './registro-comprob';

describe('RegistroComprob', () => {
  let component: RegistroComprob;
  let fixture: ComponentFixture<RegistroComprob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroComprob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComprob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
