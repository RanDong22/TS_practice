// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

SimpleVue({
  data() {
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
      alert(this.amount);
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
    },
  },
});

// ============= Your Code Here =============

type GetComputed<C extends Record<string, any>> = {
  [P in keyof C]: ReturnType<C[P]>;
};
declare function SimpleVue<D, C extends Record<string, any>, M>(options: {
  data(this: {}): D;
  computed: C & ThisType<D>;
  methods: M & ThisType<D & GetComputed<C> & M>;
}): D & GetComputed<C> & M;
