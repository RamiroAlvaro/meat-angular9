import { TestBed } from '@angular/core/testing';

import { LeaveOrderGuard } from './leave-order.guard';

describe('LeaveOrderGuard', () => {
  let guard: LeaveOrderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveOrderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
