import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './usr-service.service';

describe('UsrServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServiceService = TestBed.get(UserServiceService);
    expect(service).toBeTruthy();
  });
});
