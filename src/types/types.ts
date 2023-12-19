export type SnakeCaseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${First extends Capitalize<First> ? '_' : ''}${Lowercase<First>}${SnakeCaseString<Rest>}`
  : S;

export type SnakeCase<T> = {
  [K in keyof T as Uncapitalize<SnakeCaseString<string & K>>]: T[K];
};

export type CamelCaseString<S extends string> = S extends `${infer First}_${infer Rest}`
  ? `${First}${CamelCaseString<Capitalize<Rest>>}`
  : S;

type CamelCaseArray<T> = T extends object
  ? T extends Array<infer U>
    ? CamelCaseArray<U>[]
    : {
        [K in keyof T as CamelCaseString<string & K>]: CamelCase<T[K]>;
      }[]
  : T[];

export type CamelCase<T> = {
  [K in keyof T as Uncapitalize<CamelCaseString<string & K>>]: T[K] extends Array<infer U>
    ? CamelCaseArray<U>
    : CamelCase<T[K]>;
};
