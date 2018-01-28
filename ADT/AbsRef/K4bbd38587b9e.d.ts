import * as Q from '../../core';
import * as K9f214799149b from '../SHAKE128_48/K9f214799149b';
import * as K3e8257255cbf from '../ADT/K3e8257255cbf';
import * as Kdc26e9d90047 from '../Identifier/Kdc26e9d90047';
import * as K07b1b045ac3c from '../ADTRef/K07b1b045ac3c';
export declare const $AbsRef: Q.zmFold<AbsRef>;
export declare const ___: Q.zmTypeInfo;
export declare class AbsRef implements Q.Flat {
    _0: K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<AbsRef>>>;
    constructor(_0: K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<AbsRef>>>);
    match<R>(m: {
        AbsRef: (v0: K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier, Kdc26e9d90047.Identifier, K07b1b045ac3c.ADTRef<AbsRef>>>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
