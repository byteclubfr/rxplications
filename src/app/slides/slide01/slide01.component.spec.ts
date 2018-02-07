import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide01Component } from './slide01.component';

describe('Slide01Component', () => {
  let component: Slide01Component;
  let fixture: ComponentFixture<Slide01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
