import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdidoComponent } from './perdido.component';

describe('PerdidoComponent', () => {
  let component: PerdidoComponent;
  let fixture: ComponentFixture<PerdidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
