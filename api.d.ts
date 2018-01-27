import { zmId, zmFold, zmTypeInfo, Decoder } from './core';
import { Type } from './ADT/Type/K7028aa556ebc';
import { AbsRef } from './ADT/AbsRef/K4bbd38587b9e';
export { flat, zmType, zmId, zmFold, unflat, Decoder };
declare function flat(v: any): Uint8Array;
declare function zmType(t: zmTypeInfo, ts: Type<AbsRef>[]): Type<AbsRef>;
declare function unflat(dec: Decoder, buf: Uint8Array): any;
