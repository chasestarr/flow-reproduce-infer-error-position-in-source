// @flow

import fn from "../b-function/index.js";
import type {Options} from "./types.js";

export const Comp = fn<Options>("hello", options => 2);
