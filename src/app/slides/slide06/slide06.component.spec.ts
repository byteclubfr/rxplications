import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide06Component } from './slide06.component';

describe('Slide06Component', () => {
  let component: Slide06Component;
  let fixture: ComponentFixture<Slide06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
