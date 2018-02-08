import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';

@Component({
  selector: 'app-slide06',
  templateUrl: './slide06.component.html',
  styleUrls: ['./slide06.component.css']
})
export class Slide06Component implements OnInit {
  messagecounter = 0;
  timeline = anime.timeline();

  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
// const p = Promise.resolve('camembert');
const p = new Promise((resolve, reject) => {
  resolve('camembert');
});

message(1);

p.then(message);

message(2);

function message(value) {
  console.log(value);
}
`);
  }

  start() {
    this.clearMessages();
    const p = new Promise((resolve, reject) => {
      resolve('camembert');
    });

    this.message(1);

    p.then(this.message.bind(this));

    this.message(2);
  }

  private clearMessages() {
    Array.prototype.forEach.call(document.querySelectorAll('.message'), node => node.remove());
    this.messagecounter = 0;
  }

  private message(s: any, moredelay = 0) {
    const icon = document.createElement('span');
    icon.classList.add('message');
    if (s === 'camembert') {
      icon.classList.add('camembert');
    } else {
      icon.innerText = s;
      icon.classList.add('text');
    }

    document.querySelector('.playground').appendChild(icon);

    this.timeline
      .add({
        targets: icon,
        opacity: 1,
        offset: this.messagecounter * 200 + moredelay,
        easing: 'linear',
        duration: 100
      })
      .add({
        targets: icon,
        right: `${this.messagecounter * 200}px`,
        offset: this.messagecounter * 200 + moredelay,
        easing: 'linear',
        duration: 1000
      });

    this.messagecounter++;
  }
}
