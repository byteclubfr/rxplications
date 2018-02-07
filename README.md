```ts
// 0. tooling
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

// 0. Introduction

// 1. Mise en oeuvre basique
// observer -> observable( ... o.next, o.complete, o.error ) -> unsubscribe function
// opérateur = composer une fonction qui lie des observers et se passe une donnée jusqu'à votre observer

// 2. Exemple "live" avec l'implém basique qui marche

// 2.5. Passage à RxJS + 3 séries d'expériences

// 3. promise async (à virer)
const p = Promise.resolve('yeah');
console.log(1);
p.then(doSomething);
console.log(2);

// 4. promise async custom
const p = new Promise((resolve, reject) => {
    resolve('yeah');
});
console.log(1);
p.then(doSomething);
console.log(2);

// 5. Observable async ? custom
const o = new Observable((observer: Observer<string>) => {
    observer.next('yeah');
});
console.log(1);
o.subscribe(doSomething);
console.log(2);

// 6. Observable async ? of (merci RxJS)
const o = of('yeah');
console.log(1);
o.subscribe(doSomething);
console.log(2);

// 7. Conséquences

// 8. promise lazy ?
const p = new Promise((resolve, reject) => {
    const data = 'yeah';
    console.log('data production', data);
    setTimeout(() => {
            resolve(data);
        },
        1000
    );
});

p.then(doSomething);

// 9. promise lazy ?
const p = new Promise((resolve, reject) => {
    const data = 'yeah';
    console.log('data production', data);
    setTimeout(() => {
            resolve(data);
        },
        1000
    );
});

// 10. observable lazy ?
const o = new Observable((observer: Observer<string>) => {
    console.log('data production');
    setTimeout(observer.next.bind(observer), random(1000), 'yeah');
});

// 11. observable lazy ?
const o = new Observable((observer: Observer<string>) => {
    console.log('data production');
    setTimeout(observer.next.bind(observer), random(1000), 'yeah');
});
o.subscribe(doSomething);

// 12. conséquences

// 13. promise multicast ?
const p = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, random(100));
});

p.then(doSomething);
p.then(doSomething);

// 14. observable multicast ?
const o = new Observable((observer: Observer<string>) => {
    setTimeout(observer.next.bind(observer), 1000, random(100));
    // setInterval(observer.next.bind(observer), 1000, random(100));
});
o.subscribe(doSomething);
o.subscribe(doSomething);

// 15. conséquences

// 16. hot vs cold

// 17. share
const o = new Observable((observer: Observer<string>) => {
setTimeout(observer.next.bind(observer), random(1000), random(100));
}).pipe(share());
o.subscribe(doSomething);
o.subscribe(doSomething);

// 18. représentation d'un observable
```
