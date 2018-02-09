import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { LinesService } from './lines.service';
import { AppRoutingModule } from './app-routing.module';
import { SlideComponent } from './slides/slide.component';
import { SlideDirective } from './slide.directive';
import { Slide01Component } from './slides/slide01/slide01.component';
import { Slide02Component } from './slides/slide02/slide02.component';
import { Slide03Component } from './slides/slide03/slide03.component';
import { Slide04Component } from './slides/slide04/slide04.component';
import { Slide05Component } from './slides/slide05/slide05.component';
import { Slide06Component } from './slides/slide06/slide06.component';
import { Slide07Component } from './slides/slide07/slide07.component';
import { Slide08Component } from './slides/slide08/slide08.component';
import { Slide09Component } from './slides/slide09/slide09.component';
import { Slide10Component } from './slides/slide10/slide10.component';
import { Slide11Component } from './slides/slide11/slide11.component';
import { Slide12Component } from './slides/slide12/slide12.component';
import { Slide13Component } from './slides/slide13/slide13.component';
import { Slide14Component } from './slides/slide14/slide14.component';
import { Slide15Component } from './slides/slide15/slide15.component';
import { Slide16Component } from './slides/slide16/slide16.component';
import { Slide17Component } from './slides/slide17/slide17.component';
import { Slide18Component } from './slides/slide18/slide18.component';
import { Slide00Component } from './slides/slide00/slide00.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    SlideComponent,
    SlideDirective,
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
  ],
  entryComponents: [
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LinesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
