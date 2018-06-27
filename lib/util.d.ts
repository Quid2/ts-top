import { Flat } from "./api";
import { SHAKE128_48 } from '../ADT/SHAKE128_48/K9f214799149b';
import { AbsRef } from '../ADT/AbsRef/K4bbd38587b9e';
export declare function prettyShake48<I extends Flat>(s: SHAKE128_48<I>): string;
export declare function parseShake48(s: string): SHAKE128_48<Flat>;
export declare function prettyAbsRef(r: AbsRef): string;
