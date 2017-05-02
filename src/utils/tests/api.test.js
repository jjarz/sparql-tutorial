import axios from 'axios';
import sinon from 'sinon';
import api from '../api';

describe('#fetchPopulation', () => {
  let sandbox;
  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());
  let cache = new Map();

  it('returns population if successful', (done) => {
    const resolved = new Promise(
      (resolve, reject) => {
        resolve(
          data: {
            results: { bindings: ['10000000']}
          }
      );
    });
    sandbox.stub(axios, 'get').returns(resolved);

    api.fetchPopulation('United States', cache)
      .then((response) => {
        expect(response).toEqual('');
      }, () => {});
  });

  it('returns ??? if unsuccessful', (done) => {

  });
});
