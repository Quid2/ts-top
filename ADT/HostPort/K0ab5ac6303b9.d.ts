/** ZM Type:
HostPort ≡   HostPort {port :: K295e24d62fac}
*/
import * as Q from '../.././lib/core';
import * as K295e24d62fac from '../Word16/K295e24d62fac';
export declare const $HostPort: Q.zmFold<HostPort>;
export declare const ___: Q.zmTypeInfo;
export declare class HostPort implements Q.Flat {
    port: K295e24d62fac.Word16;
    constructor(port: K295e24d62fac.Word16);
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        HostPort: (v0: K295e24d62fac.Word16) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
