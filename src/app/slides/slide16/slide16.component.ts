import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

function random(x: number): number {
  return Math.floor(Math.random() * x) + 1;
}

@Component({
  selector: 'app-slide16',
  templateUrl: './slide16.component.html',
  styleUrls: ['./slide16.component.css']
})
export class Slide16Component implements OnInit {
  messagecounter = [0, 0];

  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
const o = new Observable((observer: Observer<string>) => {
  const data = random(100);
  setTimeout(() => {
    observer.next(data);
  }, 2000);
});

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
    });

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
