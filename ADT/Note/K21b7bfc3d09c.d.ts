/** ZM Type:
Note a b ≡   Note {annotation :: a, object :: b}
*/
import * as Q from "@quid2/ts-core";
export declare const $Note: <A extends Q.ZM, B extends Q.ZM>(
  t0: Q.zmFold<A>,
  t1: Q.zmFold<B>
) => Q.zmFold<Note<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare class Note<A extends Q.ZM, B extends Q.ZM> implements Q.ZM {
  readonly annotation: A;
  readonly object: B;
  constructor(annotation: A, object: B);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { Note: (v0: A, v1: B) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=K21b7bfc3d09c.d.ts.map
