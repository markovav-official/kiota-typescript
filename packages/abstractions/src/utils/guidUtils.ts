/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
export type Guid = string

const guidValidator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

export function parseGuidString(source?: string): Guid | undefined {
  if (source && guidValidator.test(source)) {
    return source;
  }
  return undefined;
}

export function createGuid(): Guid {
  return ([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
}

function gen(count: number) {
  let out: string = "";
  for (let i: number = 0; i < count; i++) {
    // tslint:disable-next-line:no-bitwise
    out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return out;
}
