import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoAuthComponent } from './correo-auth.component';

describe('CorreoAuthComponent', () => {
  let component: CorreoAuthComponent;
  let fixture: ComponentFixture<CorreoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
