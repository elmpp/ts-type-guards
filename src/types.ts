export type primitive = boolean | number | string | symbol | null | undefined;

export type Classy<T> = Function & { prototype: T };

export type TypeGuard<T> = (x: any) => x is T;
