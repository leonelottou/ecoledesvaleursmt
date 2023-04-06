import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapresidenteComponent } from './lapresidente.component';

describe('LapresidenteComponent', () => {
  let component: LapresidenteComponent;
  let fixture: ComponentFixture<LapresidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapresidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LapresidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
