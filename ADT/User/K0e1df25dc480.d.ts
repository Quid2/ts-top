/** ZM Type:
User ≡   User {userName :: Kb8cd13187198 K066db52af145}
*/
import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as K066db52af145 from "../Char/K066db52af145";
export declare const $User: Q.zmFold<User>;
export declare const ___: Q.zmTypeInfo;
export declare class User implements Q.ZM {
  readonly userName: Kb8cd13187198.List<K066db52af145.Char>;
  constructor(userName: Kb8cd13187198.List<K066db52af145.Char>);
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: { User: (v0: Kb8cd13187198.List<K066db52af145.Char>) => R }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
