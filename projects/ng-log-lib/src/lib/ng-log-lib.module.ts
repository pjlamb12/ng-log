import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgLogService } from './ng-log-lib.service';
import { NgLogConfig } from './ng-log-config';

@NgModule({
	imports: [],
	providers: [NgLogService],
})
export class NgLogModule {
	static forRoot(config: NgLogConfig): ModuleWithProviders {
		return {
			ngModule: NgLogModule,
			providers: [{ provide: NgLogConfig, useValue: config }, NgLogService],
		};
	}
}
