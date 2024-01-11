import { TestBed } from '@angular/core/testing';

import { RecipeholderService } from './recipeholder.service';

describe('RecipeholderService', () => {
  let service: RecipeholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
