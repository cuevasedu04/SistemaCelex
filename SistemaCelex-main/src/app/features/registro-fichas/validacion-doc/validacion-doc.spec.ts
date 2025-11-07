import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionDoc } from './validacion-doc';

describe('ValidacionDoc', () => {
  let component: ValidacionDoc;
  let fixture: ComponentFixture<ValidacionDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
