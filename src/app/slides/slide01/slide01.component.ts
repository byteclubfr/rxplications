import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';

@Component({
  selector: 'app-slide01',
  templateUrl: './slide01.component.html',
  styleUrls: ['./slide01.component.css']
})
export class Slide01Component implements OnInit {
  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
const o = new Observable((observer: Observer<string>) => {
  observer.next('yeah');
});
console.log(1);
o.subscribe(doSomething);
console.log(2);

function doSomething(value) {
  console.log(value);
}
    `);
  }
}

// anime({
//   targets: '.camembert',
//   translateX: 250
// });
