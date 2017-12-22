import { TestBed, inject } from '@angular/core/testing';

import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesService]
    });
  });

  it('should ...', inject([DevicesService], (service: DevicesService) => {
    expect(service).toBeTruthy();
  }));
});
