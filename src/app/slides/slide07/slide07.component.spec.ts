import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide07Component } from './slide07.component';

describe('Slide07Component', () => {
  let component: Slide07Component;
  let fixture: ComponentFixture<Slide07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
