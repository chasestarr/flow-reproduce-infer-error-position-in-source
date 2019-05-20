// @flow

import {styled} from "../b-function/index.js";
import type {StylePropsT} from "./types.js";

export const Comp = styled<StylePropsT>("div", props => {
  console.log(props.foo);
  return 2;
});
