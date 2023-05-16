# Conditional Type

## `infer` match rule

### match string

```typescript
type SeparateString<T extends string> = T extends `${infer F}${infer L}`
  ? [F, L]
  : never;
type t1 = SeparateString<"asd">;
// ["a", "sd"]
type t2 = SeparateString<"a">;
// ["a", ""]

```

### match number

```typescript
type MatchNumber<T extends number> =
  `${T}` extends `${infer P extends number}${infer Q}` ? [P, Q] : never;
type t1 = MatchNumber<12>;
// [1, "2"]
type t2 = MatchNumber<1>;
// never

```

### match tuple/array

```typescript
type t = [1] extends [...infer A] ? A : never;
// [1]
type tt = [1] extends [1, ...infer A] ? A : never;
// []

```
