import { Components } from "antd/lib/date-picker/generatePicker";

// closure(declare function) - basic
function firstFunction(arg1: string) {
  return function secondFunction(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultClosure1 = firstFunction("mia")(9);

// closure(declare function) - basic(any)
function firstFunction2(arg1: any) {
  return function secondFunction2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const resultClosure2 = firstFunction2("josh")(37);

//
//
//
// closure(declare function) - basic(generic)
function firstFunction3<T>(arg1: T) {
  return function secondFunction3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const resultClosure3 = firstFunction3("josh")(37);

// closure(arrow function)
const firstArrow =
  <T>(arg1: T) =>
  <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const resultClosure4 = firstArrow("sam")(235);

// closure(arrow function)
const firstArrow2 =
  <C, P extends { name: string }>(component: C) =>
  (props: P): [C, P] => {
    return [component, props];
  };

const resultClosure5 = firstArrow2("Presenter")({ name: "john" });
