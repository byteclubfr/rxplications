import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';

@Component({
  selector: 'app-slide06',
  templateUrl: './slide06.component.html',
  styleUrls: ['./slide06.component.css']
})
export class Slide06Component implements OnInit {
  messagecounter = 0;

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
      resolve('pie_chart');
    });

    this.message('looks_one');

    p.then(this.message.bind(this));

    this.message('looks_two');
  }

  private clearMessages() {
    Array.prototype.forEach.call(document.querySelectorAll('.message'), node => node.remove());
    this.messagecounter = 0;
  }

  private message(s: any) {
    const icon = document.createElement('span');
    icon.classList.add('message');
    icon.classList.add(s);
    icon.innerHTML = `<i class="material-icons">${s}</i>`;
    document.querySelector('.playground').appendChild(icon);

    anime
      .timeline()
      .add({
        targets: icon,
        opacity: 1,
        offset: this.messagecounter * 200,
        easing: 'linear',
        duration: 100
      })
      .add({
        targets: icon,
        left: `${this.messagecounter * 175}`,
        offset: this.messagecounter * 200,
        easing: 'linear',
        duration: 1000
      });

    this.messagecounter++;
  }
}
