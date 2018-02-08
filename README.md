```ts
// 0. Introduction

// 1. 2. Mise en oeuvre basique (2 slides)
// observer -> observable( ... o.next, o.complete, o.error ) -> unsubscribe function
// opérateur = composer une fonction qui lie des observers et se passe une donnée jusqu'à votre observer

// 3. Exemple "live" avec l'implém basique qui marche

// 4. Passage à RxJS

// 5. 3 séries d'expériences

// 6. promise async custom
// const p = Promise.resolve('yeah');
const p = new Promise((resolve, reject) => {
  resolve('yeah');
});
console.log(1);
p.then(doSomething);
console.log(2);

// 7. Observable async ? custom
const o = new Observable((observer: Observer<string>) => {
  observer.next('yeah');
});
console.log(1);
o.subscribe(doSomething);
console.log(2);

// 8. Observable async ? of (merci RxJS)
const o = of('yeah');
console.log(1);
o.subscribe(doSomething);
console.log(2);

// 9. Conséquences

// 10. promise lazy ?
const p = new Promise((resolve, reject) => {
  const data = 'yeah';
  console.log('data production', data);
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

p.then(doSomething);

// 11. promise lazy ?
const p = new Promise((resolve, reject) => {
  const data = 'yeah';
  console.log('data production', data);
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

// 12. observable lazy ?
const o = new Observable((observer: Observer<string>) => {
  console.log('data production');
  setTimeout(observer.next.bind(observer), random(1000), 'yeah');
});

// 13. observable lazy ?
const o = new Observable((observer: Observer<string>) => {
  console.log('data production');
  setTimeout(observer.next.bind(observer), random(1000), 'yeah');
});
o.subscribe(doSomething);

// 14. conséquences

// 15. promise multicast ?
const p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, random(100));
});

p.then(doSomething);
p.then(doSomething);

// 16. observable multicast ?
const o = new Observable((observer: Observer<string>) => {
  setTimeout(observer.next.bind(observer), 1000, random(100));
  // setInterval(observer.next.bind(observer), 1000, random(100));
});
o.subscribe(doSomething);
o.subscribe(doSomething);

// 17. conséquences

// 18. hot vs cold

// 19. share
const o = new Observable((observer: Observer<string>) => {
  setTimeout(observer.next.bind(observer), random(1000), random(100));
}).pipe(share());
o.subscribe(doSomething);
o.subscribe(doSomething);

// 20. représentation d'un observable
```

TOOLS

```ts
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { share } from 'rxjs/operators';

function doSomething(value) {
  console.log(value);
}

function random(x: number): number {
return Math.floor(Math.random() \* x) + 1;
}
```
