import { TestBed, inject } from '@angular/core/testing';

import { EmitterService } from './emitter.service';

const assert = chai.assert;
const expect = chai.expect;
describe('EmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitterService]
    });
  });

  it('should be defined', inject([EmitterService], (service: EmitterService) => {
    assert.isDefined(service);
  }));

  it('should be created', inject([EmitterService], (service: EmitterService) => {
    expect(service).to.be.an('object');
  }));
});
