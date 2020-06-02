/** ZM Type:
TypedBLOB ≡   TypedBLOB (K7028aa556ebc K4bbd38587b9e)
                        (Kf139d4751fda K982148c09ddb)
*/
import * as Q from "@quid2/ts-core";
import * as K7028aa556ebc from "../Type/K7028aa556ebc";
import * as K4bbd38587b9e from "../AbsRef/K4bbd38587b9e";
import * as Kf139d4751fda from "../BLOB/Kf139d4751fda";
import * as K982148c09ddb from "../FlatEncoding/K982148c09ddb";
export declare const $TypedBLOB: Q.zmFold<TypedBLOB>;
export declare const ___: Q.zmTypeInfo;
export declare class TypedBLOB implements Q.ZM {
  readonly _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>;
  readonly _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>;
  constructor(
    _0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,
    _1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>
  );
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    TypedBLOB: (
      v0: K7028aa556ebc.Type<K4bbd38587b9e.AbsRef>,
      v1: Kf139d4751fda.BLOB<K982148c09ddb.FlatEncoding>
    ) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K614edd84c8bd.d.ts.map
