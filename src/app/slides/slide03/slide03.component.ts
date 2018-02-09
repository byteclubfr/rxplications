import { Component, OnInit } from '@angular/core';

interface BasicObserver {
  next: (value: any) => void;
}

class RandomObservable {
  private onsubscribe: (obs: BasicObserver) => void;

  constructor() {
    this.onsubscribe = obs => {
      let counter = 10;
      const interval = setInterval(() => {
        obs.next(Math.floor(Math.random() * 100));
        if (--counter === 0) clearInterval(interval);
      }, 1000);
    };
  }

  subscribe(obs: BasicObserver) {
    this.onsubscribe(obs);
  }
}

@Component({
  selector: 'app-slide03',
  templateUrl: './slide03.component.html',
  styleUrls: ['./slide03.component.css']
})
export class Slide03Component implements OnInit {
  constructor() {}

  ngOnInit() {
    const o = new RandomObservable();
    o.subscribe({
      next: console.log
    });
  }
}
