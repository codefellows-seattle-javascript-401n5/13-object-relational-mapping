'use strict';

export default (dir) => {

  const fakeMongo = {
    find: () => Promise.resolve([]),
    findOne: () => Promise.resolve({}),
    save: data => Promise.resolve(data),
    findByIdAndUpdate: () => Promise.resolve({}),
    findByIdAndDelete: () => Promise.resolve({}),
  };

  if (typeof dir !== 'string') {
    return {};
  }
  return {
    'foo': {
      default: fakeMongo,
    },
    'bar': {
      default: fakeMongo,
    },
    'baz': {
      default: fakeMongo,
    },
  };
};