import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicComponent } from './komic.component';

describe('KomicComponent', () => {
  let component: KomicComponent;
  let fixture: ComponentFixture<KomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
