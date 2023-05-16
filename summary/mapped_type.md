# mapped type

```typescript
declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [key: PropertyKey]: PropertyDescriptor;
}
```

## [Mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)

### modifiers

`readonly`, `?`

#### modifier prefix

add(assumed):`+`;
remove:`-`;

#### Modifier -- `?`

```typescript
type t = {
  a?: 1;
  b: 2;
};
type t1 = {
  [k in keyof t]: t[k];
};
// t
type t2 = {
  [k in keyof t]?: t[k];
};
/* {
  a?: 1 | undefined;
  b?: 2 | undefined;
} */
type t3 = {
  [k in keyof t]-?: t[k];
};
/* {
  a: 1;
  b: 2;
} */
```

##### especially for tuple type

```typescript
type Tup = [1, 2?];
const a: Tup = [1];

```

##### tips: several methods to filter partial property in mapped type

```typescript
// the first
type a = {
  r: 123;
  q: 1;
  w?: 2;
};
type RequiredKeys1<T> = {
  [K in keyof T as Record<never, any> extends Pick<T, K> ? never : K]: T[K];
};

// the second
type RequiredKeys2<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
```

#### Modifier -- `readonly`

readonly

`'readonly' type modifier is only permitted on array and tuple literal types.`

## [re-map](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)

```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [p in keyof T as p extends K ? never : p]: T[p];
}

// compare with
type MyReadonly<T, K extends keyof T = keyof T> = {
  [p in Exclude<keyof T, K>]: T[p];
}

// test cases
type case = {
  readonly title: string;
  description?: string;
  completed: boolean;
}

```

## compare mapped type with tuple type

```typescript
type a = [1, 2, 3];
type b = {
  [k in keyof a]: a[k];
};
type c = Equal<a, b>; //true
```

## Omit with never

take care of `Omit<object1 & object2, never>`

```typescript
type c = Omit<{ a: "12" } & { b: "23" }, never>;
type a = Equal<c, { a: "12"; b: "23" }>; //true
```
