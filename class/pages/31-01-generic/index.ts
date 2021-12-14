// 1. string

function getString(arg: string): string {
  return arg;
}

const result1 = getString("sam");

//
//
// 2. number

function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(3);

// 3. any

function getAny(arg: any): any {
  return arg;
}

const result3 = getAny(7);
const result4 = getAny("hello");
const result5 = getAny(false);

// 4. generic

function getGeneric<T>(arg: T): T {
  return arg;
}

const result51 = getGeneric(9);
const result52 = getGeneric("hello");
const result53 = getGeneric(true);

// 5. any +

function getReverse(arg1: any, arg2: any, arg3: any): any[] {
  return [arg3, arg2, arg1];
}

const result61 = getReverse("sam", "school", 9);
const result62 = getReverse(325, "alice", "student");
const result63 = getReverse(199, 339, "programmer");

// 6. generic +
// prettier-ignore
// @ts-ignore
function getReverseType<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result71 = getReverseType("sam", "school", 9);
const result72 = getReverseType(325, "alice", "student");
const result73 = getReverseType(199, 339, "programmer");

// 7. generic + shorten
// prettier-ignore
// @ts-ignore
function getReverseT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1];
  }

const result81 = getReverseT("sam", "school", 9);
const result82 = getReverseT(325, "alice", "student");
const result83 = getReverseT(199, 339, "programmer");

// 8. generic + shorten
// prettier-ignore
// @ts-ignore
function getReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1];
  }

const result91 = getReverseTUV("sam", "school", 9);
const result92 = getReverseTUV(325, "alice", "student");
const result93 = getReverseTUV(199, 339, "programmer");
