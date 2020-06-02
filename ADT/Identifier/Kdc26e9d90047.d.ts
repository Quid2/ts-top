/** ZM Type:
Identifier ≡   Name K3878b3580fc5 (Kb8cd13187198 K33445520c45a)
             | Symbol (Kbf2d1c86eb20 K801030ef543c)
*/
import * as Q from "@quid2/ts-core";
import * as K3878b3580fc5 from "../UnicodeLetter/K3878b3580fc5";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K33445520c45a from "../UnicodeLetterOrNumberOrLine/K33445520c45a";
import * as Kbf2d1c86eb20 from "../NonEmptyList/Kbf2d1c86eb20";
import * as K801030ef543c from "../UnicodeSymbol/K801030ef543c";
export declare const $Identifier: Q.zmFold<Identifier>;
export declare const ___: Q.zmTypeInfo;
export declare type Identifier = Name | Symbol;
export declare class Name implements Q.ZM {
  readonly _0: K3878b3580fc5.UnicodeLetter;
  readonly _1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>;
  constructor(
    _0: K3878b3580fc5.UnicodeLetter,
    _1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>
  );
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Name: (
      v0: K3878b3580fc5.UnicodeLetter,
      v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>
    ) => R;
    Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
export declare class Symbol implements Q.ZM {
  readonly _0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>;
  constructor(_0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    Name: (
      v0: K3878b3580fc5.UnicodeLetter,
      v1: Kb8cd13187198.List<K33445520c45a.UnicodeLetterOrNumberOrLine>
    ) => R;
    Symbol: (v0: Kbf2d1c86eb20.NonEmptyList<K801030ef543c.UnicodeSymbol>) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Kdc26e9d90047.d.ts.map
