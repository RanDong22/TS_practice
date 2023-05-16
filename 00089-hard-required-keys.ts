// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, "a">>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, "a">>,
  Expect<
    Equal<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      "a" | "c" | "d"
    >
  >,
  Expect<Equal<RequiredKeys<{}>, never>>
];

// ============= Your Code Here =============
type RequiredKeys<T> = {
  [P in keyof T]-?: Record<never, any> extends Pick<T, P> ? never : P;
}[keyof T];

type RequiredKeys1<T> = {
  [K in keyof T]-?: T[K] extends Required<T>[K] ? K : never;
}[keyof T];
