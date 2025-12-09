import { TestBed } from '@angular/core/testing';

import { OptionFactory } from './option-factory';

describe('OptionFactory', () => {
  let service: OptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
