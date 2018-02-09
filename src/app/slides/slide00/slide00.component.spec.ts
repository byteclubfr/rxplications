import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide00Component } from './slide00.component';

describe('Slide00Component', () => {
  let component: Slide00Component;
  let fixture: ComponentFixture<Slide00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
