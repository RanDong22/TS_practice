# [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

## empty object

FAQ:[Difference between 'object' ,{} and Object in TypeScript](https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript)

### Object

Any value (primitive, non-primitive) can be assigned to Object type.

### object(Empty object)

It is any non-primitive type. You can't assign to it any primitive type like bool, number, string, symbol.

### {}

It is pretty much the same as **Object** in **runtime** but different in compile time.

In compile time {} doesn't have Object's members and Object has more strict behavior.

## [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

索引签名不能构造成字符串字面量类型，因为它没有名字，而其他索引可以。
