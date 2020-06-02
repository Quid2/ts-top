import { EncoderState, zmId, zmFold, zmTypeInfo, Decoder, DecoderState, flatDecoder, Flat, AsString, ZM } from './core';
import { Type } from '../ADT/Type/K7028aa556ebc';
import { AbsRef } from '../ADT/AbsRef/K4bbd38587b9e';
import './pretty';
import './iterator';
import './functor';
export { flat, zmType, zmId, zmFold, unflat, Decoder, flatDecoder, Flat, AsString, ZM, EncoderState, DecoderState };
/**
 *  Encode a value in the [Flat](http://quid2.org) binary format.
 *  > flat(true)
 *  MM
 */
/**
 * @param v the value to encode
 * @return the encoded value
 */
declare function flat(v: any): Uint8Array;
/** Apply to a type to create the corresponding ZM type */
declare function zmType(t: zmTypeInfo, ts: Type<AbsRef>[]): Type<AbsRef>;
/**
 * Decode value
 * @param dec the decoder for the value only (excluding the final Filler)
 * @param buf the binary buffer containing the encoded value plus the final Filler
 * @return the decoded value
 */
declare function unflat(dec: Decoder, buf: Uint8Array): any;
