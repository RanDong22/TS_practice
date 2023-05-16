# extends

## never

### demo

```typescript
type T<R> = never extends R ? 0 : 1;
type Q<R> = R extends never ? 0 : 1;

// validation
type testT = T<never>;
// 0

type testQ = Q<never>;
// never

```

### explanation

1. T extends ...

T: considered as a **null** union type
Here, operator "extends" makes no sense and expression always returns never
2. Never is contained by any type, but contains nothing except for itself.
