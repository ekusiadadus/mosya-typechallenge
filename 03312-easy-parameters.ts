// MyParametersを実装してください
// MyParametersは関数の引数の型をタプルで返す型です

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
