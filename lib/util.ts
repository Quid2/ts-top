//import { Flat } from "./api";
import { Flat } from "./core";
import { Word8 } from '../ADT/Word8/Kb1f46a49c8f8'
import { SHAKE128_48 } from '../ADT/SHAKE128_48/K9f214799149b'
import { AbsRef } from '../ADT/AbsRef/K4bbd38587b9e'

export function parseAbsRef(s: string): AbsRef {
    if (s.substring(0, 1) !== "K") throw "unexpected input: " + s;

    return new AbsRef(parseShake48(s.substring(1)));
}

export function parseShake48(s: string) {
    function hex(offset: number) { return new Word8(parseInt(s.substring(offset, offset + 2), 16)); }

    return new SHAKE128_48(hex(0), hex(2), hex(4), hex(6), hex(8), hex(10))
}

export function prettyAbsRef(r: AbsRef): string {
    return "K" + prettyShake48(r._0);
}

export function prettyShake48<I extends Flat>(s: SHAKE128_48<I>): string {
    function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
    return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
}