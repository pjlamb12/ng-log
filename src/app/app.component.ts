import { Component, OnInit } from '@angular/core';
import { NgLogService } from 'projects/ng-log-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _log: NgLogService) {

  }

  ngOnInit() {
    this._log.debug('test')
  }
}
