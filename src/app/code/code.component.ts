import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { Line } from '../line';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bc-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  lines$: Observable<Line[]>;

  constructor(private code: LinesService) {
    this.lines$ = code.lines$;
  }

  ngOnInit() {}
}
