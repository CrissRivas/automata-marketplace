import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomicsComponent } from './komics.component';

describe('KomicsComponent', () => {
  let component: KomicsComponent;
  let fixture: ComponentFixture<KomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
