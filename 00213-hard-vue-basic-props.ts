// ============= Test Cases =============
import type { Debug, Equal, Expect, IsAny } from "./test-utils";
class ClassA {}
VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>;
    type cases = [
      Expect<IsAny<PropsType["propA"]>>,
      Expect<Equal<PropsType["propB"], string>>,
      Expect<Equal<PropsType["propC"], boolean>>,
      Expect<Equal<PropsType["propD"], ClassA>>,
      Expect<Equal<PropsType["propE"], string | number>>,
      Expect<Equal<PropsType["propF"], RegExp>>
    ];

    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const propE = this.propE;
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>
      ];
    },
  },
});

// ============= Your Code Here =============
type InferComputed<C extends Record<string, any>> = {
  [K in keyof C]: ReturnType<C[K]>;
};

type Prop<T = any> = PropType<T> | { type?: PropType<T> };
type PropType<T> = PropConstructor<T> | PropConstructor<T>[];
type PropConstructor<T = any> =
  | { new (...args: any[]): T & object }
  | { (): T };
type InferPropType<P> = P extends Prop<infer T>
  ? unknown extends T
    ? any
    : T
  : any;
type InferProps<P extends Record<string, any>> = {
  [K in keyof P]: InferPropType<P[K]>;
};
declare function VueBasicProps<
  P extends Record<string, any>,
  D,
  C extends Record<string, any>,
  M,
  Props = InferProps<P>
>(options: {
  props?: P;
  data(this: Props): D;
  computed: C & ThisType<D>;
  methods: M & ThisType<Props & D & InferComputed<C> & M>;
}): Props & D & InferComputed<C> & M;

/*  To summarize:
    1. ThisType<T> declares the type of this as T.
    2. Convert the type of props to its corresponding primitive type, or keep it unchanged. 
      2.1. const a: StringConstructor = String;
      2.2. The class name is directly used as the type, meaning the return type of the constructor. 
      2.3. In the constructor, distinguish between primitive types (boolean, string) and complex types, and process primitive types accordingly. This involves using 
        | { new (...args: any[]): T & object }
        | { (): T }
*/
