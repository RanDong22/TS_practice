# union and intersection types

## union with Mapped Types

```typescript

type ObjUnion = { a: 1 } | { b: 2; a: 2 };
type ObjUnionKey = keyof ObjUnion;
// "a"

```

## intersection with Mapped Types

### demo1

```typescript

type ObjInter = {
  a: 1;
} & {
  a: 2;
  b: 2;
};
// never

```

### demo2

```typescript
type tq = { a?: 1; b?: 2; c: 3 } & { a: 1 };
type c = {
  [k in keyof tq]: tq[k];
};
/* {
    a: 1;
    b?: 2 | undefined;
    c: 3;
} */

```

## Mapped Types

```typescript
type ObjValNever = Record<string, never>;
/* {
  [x: string]: never;
} */

type ObjKeyNever = Record<never, string>;
// {}
```
