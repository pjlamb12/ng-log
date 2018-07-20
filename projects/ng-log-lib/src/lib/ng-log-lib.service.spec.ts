import { TestBed, inject } from '@angular/core/testing';

import { NgLogService } from './ng-log-lib.service';

describe('NgLogService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NgLogService],
		});
	});

	it('should be created', inject([NgLogService], (service: NgLogService) => {
		expect(service).toBeTruthy();
	}));
});
