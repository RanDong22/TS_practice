# tuple

## demo

```typescript
type f = (data: number) => number;
type tf = Parameters<f>;
// [data: number]
type tr = [data: number] extends [d: number] ? 1 : 2;
// 1


```
