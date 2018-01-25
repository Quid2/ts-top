import * as Q from '../../core';
import * as Kb1f46a49c8f8 from '../Word8/Kb1f46a49c8f8';
import * as Kda6836778fd4 from '../Maybe/Kda6836778fd4';
import * as K86653e040025 from '../ConTree/K86653e040025';
export declare const $ADT: <A extends Q.Flat, B extends Q.Flat, C extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>, t2: Q.zmFold<C>) => Q.zmFold<ADT<A, B, C>>;
export declare class ADT<A extends Q.Flat, B extends Q.Flat, C extends Q.Flat> implements Q.Flat {
    declName: A;
    declNumParameters: Kb1f46a49c8f8.Word8;
    declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>;
    constructor(declName: A, declNumParameters: Kb1f46a49c8f8.Word8, declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>);
    match<R>(m: {
        ADT: (v0: A, v1: Kb1f46a49c8f8.Word8, v2: Kda6836778fd4.Maybe<K86653e040025.ConTree<B, C>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
