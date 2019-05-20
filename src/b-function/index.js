// @flow

type StyleFn = {
  <Props>(string, (Props) => number): any,

  <Base: number, Props>(Base, (Props) => number): any,
};

const styled: StyleFn = (base, callback) => {
  return props => callback(props);
};

export default styled;
