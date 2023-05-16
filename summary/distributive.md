# [distributive](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)

## with generic type

```typescript
type GetUnion<T> = T extends 0 ? 1 : 2;
type test = GetUnion<0 | 2>;
// 1 | 2
```

## with non-generic type

```typescript
type qw = 0 | 2 extends 0 ? 1 : 2;
// 2

```

## summary

Only when conditional types act on a generic type, they become distributive.
