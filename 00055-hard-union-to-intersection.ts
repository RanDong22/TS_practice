// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];

// ============= Your Code Here =============
type UnionToIntersection<U> = (U extends any ? (a: U) => any : never) extends (
  a: infer P
) => any
  ? P
  : never;