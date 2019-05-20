/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from "react";
import {createStyled} from "styletron-react";
import {driver, getInitialStyle} from "styletron-standard";
import type {StyleObject} from "styletron-standard";
import type {ThemeT} from "./types.js";

const wrapper = StyledComponent => {
  return props => <StyledComponent {...props} $theme={{text_color: "blue"}} />;
};

type StyletronComponent<Props> = React.StatelessFunctionalComponent<Props> & {
  // eslint-disable-next-line flowtype/no-weak-types
  __STYLETRON__: any,
};

type StyleFn = {
  (string, StyleObject): StyletronComponent<{}>,

  <Props>(
    string,
    ({$theme: ThemeT} & Props) => StyleObject,
  ): StyletronComponent<Props>,

  <Props, CustomTheme>(
    string,
    ({$theme: CustomTheme} & Props) => StyleObject,
  ): StyletronComponent<Props>,

  <Base: React.ComponentType<any>>(
    Base,
    StyleObject,
  ): StyletronComponent<$Diff<React.ElementConfig<Base>, {className: any}>>,

  <Base: React.ComponentType<any>, Props>(
    Base,
    ({$theme: ThemeT} & Props) => StyleObject,
  ): StyletronComponent<
    $Diff<React.ElementConfig<Base>, {className: any}> & Props,
  >,

  <Base: React.ComponentType<any>, Props, CustomTheme>(
    Base,
    ({$theme: CustomTheme} & Props) => StyleObject,
  ): StyletronComponent<
    $Diff<React.ElementConfig<Base>, {className: any}> & Props,
  >,
};

const styled = ((createStyled({
  wrapper,
  getInitialStyle,
  driver,
  // eslint-disable-next-line flowtype/no-weak-types
}): any): StyleFn);
export default styled;
