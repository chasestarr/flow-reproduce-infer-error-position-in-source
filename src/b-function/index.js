// @flow

type FnT = {
  <T>(string, (T) => number): any,

  <N: number, T>(N, (T) => number): any,
};

const fn: FnT = (n, callback) => {
  return props => callback(props);
};

export default fn;
