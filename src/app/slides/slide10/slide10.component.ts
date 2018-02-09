import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../lines.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-slide10',
  templateUrl: './slide10.component.html',
  styleUrls: ['./slide10.component.css']
})
export class Slide10Component implements OnInit {
  messagecounter = 0;

  constructor(public code: LinesService) {}

  ngOnInit() {
    this.code.setCode(`
const p = new Promise((resolve, reject) => {
  const data = 'camembert';
  message(camembert + ' build');
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

p.then(message);
`);
  }

  start() {
    this.clearMessages();
    const p = new Promise((resolve, reject) => {
      const data = 'pie_chart';
      this.message('shopping_cart');
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    p.then(this.message.bind(this));
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
