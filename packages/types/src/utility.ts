export type AnyFunction<R = any, A extends any[] = any[]> = (...args: A) => R;
export declare type AnyObject = Record<string | number | symbol, any>;
export type DeepReturnType<T extends AnyFunction> = Awaited<ReturnType<T>>;
export type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;
