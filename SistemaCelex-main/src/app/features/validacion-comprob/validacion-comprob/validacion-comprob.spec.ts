import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionComprob } from './validacion-comprob';

describe('ValidacionComprob', () => {
  let component: ValidacionComprob;
  let fixture: ComponentFixture<ValidacionComprob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionComprob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionComprob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
