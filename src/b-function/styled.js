// @flow
import * as React from "react";
import {createStyled} from "styletron-react";
import {driver} from "styletron-standard";
import type {StyleObject} from "styletron-standard";

type StyleFn = {
  <Props>(string, (Props) => StyleObject): any,

  <Base: React.ComponentType<any>, Props>(Base, (Props) => any): any,
};

const styled = ((createStyled({
  wrapper: x => x,
  getInitialStyle: () => ({}),
  driver,
}): any): StyleFn);

export default styled;
