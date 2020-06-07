import { zmFold } from "./zm";
import { SHAKE128_48 } from "@quid2/adt/SHAKE128_48/K9f214799149b";
import { AbsRef } from "@quid2/adt/AbsRef/K4bbd38587b9e";
import { TypedBLOB } from "@quid2/adt/TypedBLOB/K614edd84c8bd";
import { BLOB } from "@quid2/adt/BLOB/Kf139d4751fda";
import { FlatEncoding } from "@quid2/adt/FlatEncoding/K982148c09ddb";
/**
 * flat(3) // => [233,1]
 * @param v
 */
export declare function flatBLOB(v: any): BLOB<FlatEncoding>;
export declare function typedBLOB(v: any, t: zmFold<any>): TypedBLOB;
export declare function parseAbsRef(s: string): AbsRef;
/**
 *
 * @param s string to parse
 *
 *    parseShake48 "K3e8257255cbf" // => boh
 *
 */
export declare function parseShake48(s: string): SHAKE128_48<any>;
//# sourceMappingURL=util.d.ts.map