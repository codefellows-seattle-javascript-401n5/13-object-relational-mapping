'use strict;'

import {Mockgoose,} from 'mockgoose';
import mongoose from 'mongoose';

jest.mock('require-dir');

const mockgoose = new Mockgoose(mongoose);

console.log('models.helper FTW');

export default {
  afterAll: (done) => {


    mongoose.disconnect().then(() => {
      console.log('disconnected');
      done();
    }).catch((err) => {
      console.error(err);
      done();
    });
  },

  beforeAll: done => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://127.0.0.1/dogs').then(() => {
        done();
      });
    });
  },

  afterEach: done => {
    mockgoose.helper.reset().then(done);
  },
};