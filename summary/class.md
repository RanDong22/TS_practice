# type `Class Cla` VS type `typeof Class Cla`

```typescript
class Cla {
  pro: string;
  constructor() {
    this.pro = "123";
  }
  someRandom() {
    return Math.random();
  }
}
const a: Cla = new Cla();
const B: typeof Cla = Cla;
```

If you declare a class `Cla`, there are two types were generated.

1. type `Cla`, use `Cla` as a type, which is same as the return type of Cla.constructor.
2. type `typeof Cla`, which is the same as variable `Cla`

## infer StringConstructor to string

```typescript
type a = string extends String ? true : false;// true

type InferConstructor<T = any> =
  | { new (...args: any[]): T & object }
  | { (): T };

type GetString = InferConstructor<StringConstructor> // string

```
