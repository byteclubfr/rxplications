import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Line, Status } from './line';

@Injectable()
export class LinesService {
  private _lines$ = new BehaviorSubject<Array<Line>>([]);
  public lines$ = this._lines$.asObservable();

  setCode(src: string) {
    this._lines$.next(
      src
        .split('\n')
        .map(
          codeline =>
            this.isBlank(codeline) ? { codeline: ' ', status: Status.visible } : { codeline, status: Status.hidden }
        )
    );
  }

  showLines(lines: Array<number>) {
    this._lines$.next(
      this._lines$.value.map(({ codeline, status }, i) => ({
        codeline,
        status: lines.includes(i) ? Status.highlighted : status === Status.hidden ? Status.hidden : Status.visible
      }))
    );
  }

  showAllLines() {
    this._lines$.next(
      this._lines$.value.map(({ codeline, status }, i) => ({
        codeline,
        status: Status.highlighted
      }))
    );
  }

  private isBlank(str: string) {
    return str.length === 0 || !str.trim();
  }
}
