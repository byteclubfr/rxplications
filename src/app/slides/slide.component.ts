import { Component, OnInit, ViewChild, ComponentFactoryResolver, HostListener } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SlideDirective } from '../slide.directive';

import { Slide01Component } from './slide01/slide01.component';
import { Slide02Component } from './slide02/slide02.component';
import { Slide03Component } from './slide03/slide03.component';
import { Slide04Component } from './slide04/slide04.component';
import { Slide05Component } from './slide05/slide05.component';
import { Slide06Component } from './slide06/slide06.component';
import { Slide07Component } from './slide07/slide07.component';
import { Slide08Component } from './slide08/slide08.component';
import { Slide09Component } from './slide09/slide09.component';
import { Slide10Component } from './slide10/slide10.component';
import { Slide11Component } from './slide11/slide11.component';
import { Slide12Component } from './slide12/slide12.component';
import { Slide13Component } from './slide13/slide13.component';
import { Slide14Component } from './slide14/slide14.component';
import { Slide15Component } from './slide15/slide15.component';
import { Slide16Component } from './slide16/slide16.component';
import { Slide17Component } from './slide17/slide17.component';
import { Slide18Component } from './slide18/slide18.component';
import { Slide00Component } from './slide00/slide00.component';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  SPACE = 32
}

const slides = [
  Slide00Component,
  Slide01Component,
  Slide02Component,
  Slide03Component,
  Slide04Component,
  Slide05Component,
  Slide06Component,
  Slide07Component,
  Slide08Component,
  Slide09Component,
  Slide10Component,
  Slide11Component,
  Slide12Component,
  Slide13Component,
  Slide14Component,
  Slide15Component,
  Slide16Component,
  Slide17Component,
  Slide18Component
];

@Component({
  selector: 'bc-slide',
  template: '<ng-template slide-host></ng-template>'
})
export class SlideComponent implements OnInit {
  slide: number;
  @ViewChild(SlideDirective) slideHost: SlideDirective;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.SPACE) {
      if (this.slide === slides.length - 1) return;
      this.router.navigate(['/', (this.slide + 1).toString().padStart(2, '0')]);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.slide === 0) return;
      this.router.navigate(['/', (this.slide - 1).toString().padStart(2, '0')]);
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slide = parseInt(params.get('id'), 10);
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(slides[this.slide]);
      let viewContainerRef = this.slideHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      // (<AdComponent>componentRef.instance).data = adItem.data;
    });
  }
}
