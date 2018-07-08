'use strict';

import mongoose from 'mongoose';


const cats = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    uppercase: true,
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

export default mongoose.model('cats', cats);

9:05