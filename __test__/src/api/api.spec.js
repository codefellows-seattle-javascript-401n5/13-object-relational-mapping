'use strict';

require('babel-register');
const superagent = require('superagent');

import supertest from 'supertest';
// import {server,} from '../../../src/app.js';
import modelsHelper from '../../../scripts/models.helper.js';
import dogs from '../../../src/models/dogs';
import cats from '../../../src/models/cats';

const mockRequest = supertest(server);

const DOGS_URL = '/api/v1/dogs';
const CATS_URL = '/api/v1/cats';

describe('API', () => {

  const PORT = 8888;
  beforeAll(() => {
    app.start(PORT);
  });
  afterAll(() => {
    app.stop();
  });

  it('gets a 200 and returns a resource with a valid body', () => {
    return superagent.get(DOGS_URL)
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  xit('gets a 404 and responds with not found for valid requests made with an id that was not found', () => {
    return superagent.get(DOGS_URL)
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
        expect(err.status).toBe(400);
      });

    xit('gets a 200 and returns a resource with an updated body', () => {
      return superagent.get(DOGS_URL)
        .then(console.log)
        .catch(response => {
          expect(response.status).toEqual(200);
        });
    });

    xit('gets a 400 responds with bad request if no request body was provided', () => {
      return superagent.get('http://localhost:8888/api/v1/foobar')
        .then(console.log)
        .catch(response => {
          expect(response.status).toEqual(400);
        });
    });

    xit('gets a 404 responds with not found for valid requests made with an id that was not found', () => {
      return superagent.get('http://localhost:8888/api/v1/foobar')
        .then(console.log)
        .catch(response => {
          expect(response.status).toEqual(404);
        });
    });
    xit('gets a 400  responds with bad request if no request body was provided', () => {
      return superagent.get('http://localhost:8888/api/v1/foobar')
        .then(console.log)
        .catch(response => {
          expect(response.status).toEqual(400);
        });
    });
    xit('gets a 200 returns a resource for requests made with a valid body', () => {
      return superagent.get('http://localhost:8888/api/v1/foobar')
        .then(console.log)
        .catch(response => {
          expect(response.status).toEqual(200);
        });
    });
  });
});
