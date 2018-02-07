import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide04Component } from './slide04.component';

describe('Slide04Component', () => {
  let component: Slide04Component;
  let fixture: ComponentFixture<Slide04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
