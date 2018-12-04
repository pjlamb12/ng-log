import { Injectable, Optional } from '@angular/core';
import { NgLogConfig } from './ng-log-config';
import { LogLevels } from './ng-log-levels.enum';

@Injectable({
	providedIn: 'root',
})
export class NgLogService {
	private level: number;

	constructor(@Optional() config: NgLogConfig) {
		this.level = config.level;
	}

	updateLogLevel(level: number) {
		if (level <= LogLevels.LOG && level >= LogLevels.ERROR) {
			this.level = level;
		}
	}

	error(...params) {
		if (this.level >= LogLevels.ERROR) {
			console.error(...params);
		}
	}

	warn(...params) {
		if (this.level >= LogLevels.WARN) {
			this._doLog(...params);
		}
	}

	info(...params) {
		if (this.level >= LogLevels.INFO) {
			this._doLog(...params);
		}
	}

	debug(...params) {
		if (this.level >= LogLevels.DEBUG) {
			this._doLog(...params);
		}
	}

	log(...params) {
		if (this.level === LogLevels.LOG) {
			this._doLog(...params);
		}
	}

	private _doLog(...params) {
		console.log(...params);
	}
}
