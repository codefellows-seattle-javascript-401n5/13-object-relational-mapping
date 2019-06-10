'use strict';

import mongoose from 'mongoose';


const dogs = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: '1',
  },
  color: {
    type: String,
    required: true,
  },
});

export default mongoose.model('dogs', dogs);