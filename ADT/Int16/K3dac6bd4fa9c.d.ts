/** ZM Type:
Int16 ≡   Int16 (K03226796ede4 K295e24d62fac)
*/
import * as Q from '../.././lib/core';
import * as K03226796ede4 from '../ZigZag/K03226796ede4';
import * as K295e24d62fac from '../Word16/K295e24d62fac';
export declare const $Int16: Q.zmFold<Int16>;
export declare const ___: Q.zmTypeInfo;
export declare class Int16 implements Q.ZM {
    readonly _0: K03226796ede4.ZigZag<K295e24d62fac.Word16>;
    constructor(_0: K03226796ede4.ZigZag<K295e24d62fac.Word16>);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        Int16: (v0: K03226796ede4.ZigZag<K295e24d62fac.Word16>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
