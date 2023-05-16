# any_unknown_never_void

## any VS unknown

> any 和 unknown 的区别： any 和 unknown 都代表任意类型，但是 unknown 只能接收任意类型的值，而 any 除了可以接收任意类型的值，也可以赋值给任意类型（除了 never）。类型体操中经常用 unknown 接受和匹配任何类型，而很少把任何类型赋值给某个类型变量。

## never VS void

> A function that does not return any value explicitly has a return value of `undefined`. To indicate that we ignore it, we use the `void` return type
>
> A function that never returns at all due to some reasons has a return type of  never

## any

> any 类型与任何类型的交叉都是 any
ps: 交叉类型A & B的结果返回一个类型同时具有类型A和类型B的值
