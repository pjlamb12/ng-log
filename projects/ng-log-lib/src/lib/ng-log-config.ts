export class NgLogConfig {
	level: number;

	constructor(obj: any = {}) {
		this.level = obj.level;

		return this;
	}
}
