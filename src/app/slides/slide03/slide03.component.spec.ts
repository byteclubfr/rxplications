import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide03Component } from './slide03.component';

describe('Slide03Component', () => {
  let component: Slide03Component;
  let fixture: ComponentFixture<Slide03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
