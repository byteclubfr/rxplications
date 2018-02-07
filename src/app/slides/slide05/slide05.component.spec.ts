import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide05Component } from './slide05.component';

describe('Slide05Component', () => {
  let component: Slide05Component;
  let fixture: ComponentFixture<Slide05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
