import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-slide08',
  templateUrl: './slide08.component.html',
  styleUrls: ['./slide08.component.css']
})
export class Slide08Component implements OnInit {
  messagecounter = 0;

  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
const o = of('camembert');

message(1);

o.subscribe(message);

message(2);

function message(value) {
  console.log(value);
}
`);
  }

  start() {
    this.clearMessages();
    const o = of('pie_chart');

    this.message('looks_one');

    o.subscribe(this.message.bind(this));

    this.message('looks_two');
  }

  private clearMessages() {
    Array.prototype.forEach.call(document.querySelectorAll('.message'), node => node.remove());
    this.messagecounter = 0;
  }

  private message(s: any, moredelay = 0) {
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
        offset: this.messagecounter * 200 + moredelay,
        easing: 'linear',
        duration: 100
      })
      .add({
        targets: icon,
        left: `${this.messagecounter * 175}`,
        offset: this.messagecounter * 200 + moredelay,
        easing: 'linear',
        duration: 1000
      });

    this.messagecounter++;
  }
}
