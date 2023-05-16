# ways to implements complexTypes

## Equal

1. judge type A === type B
   1. (i) of A => i in B;
   2. (i) of B => i in A;
2. <=>
   1. (i) of A => i in B;
   2. (i) of ~A => i in ~B;

```typescript
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

```
