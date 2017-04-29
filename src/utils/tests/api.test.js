import { expect } from 'chai';
import sinon from 'sinon';
import fetchPopulation from '../api';

describe('#fetchPopulation', () => {
  let sandbox;
  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  it('returns population if successful', (done) => {
    const resolved = new Promise((r) => r({ data: [] }));
    sandbox.stub(axios, ‘get’).returns(resolved);

    fetchPopulation()
      .then(() => {
        expect()
      });
  });

  it('returns ??? if unsuccessful', (done) => {

  });
});
