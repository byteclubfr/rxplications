import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide02Component } from './slide02.component';

describe('Slide02Component', () => {
  let component: Slide02Component;
  let fixture: ComponentFixture<Slide02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
