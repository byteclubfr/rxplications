import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

function random(x: number): number {
  return Math.floor(Math.random() * x) + 1;
}

@Component({
  selector: 'app-slide15',
  templateUrl: './slide15.component.html',
  styleUrls: ['./slide15.component.css']
})
export class Slide15Component implements OnInit {
  messagecounter = [0, 0];

  constructor(public code: LinesService) { }

  ngOnInit() {
    this.code.setCode(`
const p = new Promise((resolve, reject) => {
  const data = random(100);
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

p.then(message);
p.then(message);
`);
  }

  start() {
    this.clearMessages();
    const p = new Promise((resolve, reject) => {
      const data = random(100);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    p.then(this.message.bind(this, 0));
    p.then(this.message.bind(this, 1));
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
