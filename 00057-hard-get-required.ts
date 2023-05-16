// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
];

// ============= Your Code Here =============
type GetRequired<T> = {
  [K in keyof T as Record<never, any> extends Pick<T, K> ? never : K]: T[K];
};

type GetRequired1<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
