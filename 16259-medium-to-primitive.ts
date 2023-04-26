// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

// ============= Your Code Here =============
type FilterType<T> = T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends string
  ? string
  : T extends symbol
  ? symbol
  : T extends bigint
  ? bigint
  : never;
type ToPrimitive<T extends object> = {
  [K in keyof T]: T[K] extends object ? ToPrimitive<T[K]> : FilterType<T[K]>;
};
