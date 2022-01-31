import { L } from "ts-toolbelt";
import { Get } from "../utils";
import { Resolve, Any } from ".";
import { IsRepresentable } from "./utils";
export declare type TupleType = "tuple";
export declare type Tuple<V, O = true, P = Any> = {
    type: TupleType;
    values: V;
    isOpen: O;
    openProps: P;
};
export declare type Values<T> = Get<T, "values">;
export declare type IsOpen<T> = Get<T, "isOpen">;
export declare type OpenProps<T> = Get<T, "openProps">;
export declare type ResolveTuple<T> = IsOpen<T> extends true ? L.Concat<RecurseOnTuple<Values<T>>, [...Resolve<OpenProps<T>>[]]> : RecurseOnTuple<Values<T>>;
declare type RecurseOnTuple<V, R extends L.List = []> = {
    stop: L.Reverse<R>;
    continue: V extends L.List ? RecurseOnTuple<L.Tail<V>, L.Prepend<R, Resolve<L.Head<V>>>> : never;
}[V extends [any, ...L.List] ? "continue" : "stop"];
export declare type IsTupleRepresentable<T> = AreAllTupleValuesRepresentable<Values<T>>;
declare type AreAllTupleValuesRepresentable<V> = {
    stop: true;
    continue: V extends L.List ? IsRepresentable<L.Head<V>> extends false ? false : AreAllTupleValuesRepresentable<L.Tail<V>> : never;
}[V extends [any, ...L.List] ? "continue" : "stop"];
export {};
