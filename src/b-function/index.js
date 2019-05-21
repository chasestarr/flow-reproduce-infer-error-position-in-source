// @flow

type FnT = {
  <T>(string, (T) => number): any,

  <N: number, T>(N, (T) => number): any,
};

const fn: FnT = (n, callback) => {
  return x => callback(x);
};

export default fn;
