import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComicComponent } from './custom-comic.component';

describe('CustomComicComponent', () => {
  let component: CustomComicComponent;
  let fixture: ComponentFixture<CustomComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
