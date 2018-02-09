import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { share } from 'rxjs/operators';

function random(x: number): number {
  return Math.floor(Math.random() * x) + 1;
}

@Component({
  selector: 'app-slide18',
  templateUrl: './slide18.component.html',
  styleUrls: ['./slide18.component.css']
})
export class Slide18Component implements OnInit {
  messagecounter = [0, 0];

  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
const o = new Observable((observer: Observer<string>) => {
  const data = random(100);
  setTimeout(() => {
    observer.next(data);
  }, 2000);
}).pipe(
  share()
);

o.subscribe(message);
o.subscribe(message);

// o.subscribe(message);
// setTimeout(message, 1000);

// o.subscribe(message);
// setTimeout(message, 3000);
`);
  }

  start() {
    this.clearMessages();
    const o = new Observable((observer: Observer<number>) => {
      const data = random(100);
      setTimeout(() => {
        observer.next(data);
      }, 2000);
    }).pipe(share());

    o.subscribe(this.message.bind(this, 0));
    o.subscribe(this.message.bind(this, 1));

    // o.subscribe(this.message.bind(this, 0));
    // setTimeout(() => {
    //   o.subscribe(this.message.bind(this, 1));
    // }, 1000);

    // o.subscribe(this.message.bind(this, 0));
    // setTimeout(() => {
    //   o.subscribe(this.message.bind(this, 1));
    // }, 3000);
  }

  private clearMessages() {
    Array.prototype.forEach.call(document.querySelectorAll('.message'), node => node.remove());
    this.messagecounter = [0, 0];
  }

  private message(track, s) {
    const icon = document.createElement('span');
    icon.classList.add('message', 'text');
    icon.classList.add(s);
    icon.innerHTML = s;
    document.querySelector(`.playground${track}`).appendChild(icon);

    anime
      .timeline()
      .add({
        targets: icon,
        opacity: 1,
        offset: this.messagecounter[track] * 200,
        easing: 'linear',
        duration: 100
      })
      .add({
        targets: icon,
        left: `${this.messagecounter[track] * 175}`,
        offset: this.messagecounter[track] * 200,
        easing: 'linear',
        duration: 1000
      });

    this.messagecounter[track]++;
  }
}
