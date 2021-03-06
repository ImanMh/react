/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
const createSymbol = (id, fallBack) => (
  hasSymbol ? Symbol.for(id) : fallBack
);

export const REACT_ELEMENT_TYPE = createSymbol('react.element', 0xeac7);
export const REACT_PORTAL_TYPE = createSymbol('react.portal', 0xeaca);
export const REACT_FRAGMENT_TYPE = createSymbol('react.fragment', 0xeacb);
export const REACT_STRICT_MODE_TYPE = createSymbol('react.strict_mode', 0xeacc);
export const REACT_PROFILER_TYPE = createSymbol('react.profiler', 0xead2);
export const REACT_PROVIDER_TYPE = createSymbol('react.provider', 0xeacd);
export const REACT_CONTEXT_TYPE = createSymbol('react.context', 0xeace);
export const REACT_ASYNC_MODE_TYPE = createSymbol('react.async_mode', 0xeacf);
export const REACT_FORWARD_REF_TYPE = createSymbol('react.forward_ref', 0xead0);
export const REACT_TIMEOUT_TYPE = createSymbol('react.timeout', 0xead1);

const MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
const FAUX_ITERATOR_SYMBOL = '@@iterator';

export function getIteratorFn(maybeIterable: ?any): ?() => ?Iterator<*> {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  const maybeIterator =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}
