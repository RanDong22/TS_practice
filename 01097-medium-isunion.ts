// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];

// ============= Your Code Here =============
/**
 * 1. get distributed type
 * 2. compare distributed type with original type
 */
type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends K
  ? [K] extends [T]
    ? false
    : true
  : never;
/* type IsUnion<T> = ([T] extends [T] ? T[] : never) extends (
  T extends T ? T[] : never
)
  ? false
  : [T] extends [never]
  ? false
  : true; */
