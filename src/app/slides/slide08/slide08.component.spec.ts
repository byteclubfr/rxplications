import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide08Component } from './slide08.component';

describe('Slide08Component', () => {
  let component: Slide08Component;
  let fixture: ComponentFixture<Slide08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
