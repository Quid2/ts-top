/** ZM Type:
ByPattern a ≡   ByPattern (Kb8cd13187198 (Kc23b20389114 (Kb8cd13187198 K65149ce3b366)))
*/
import * as Q from "@quid2/ts-core";
import * as Kb8cd13187198 from "../List/Kb8cd13187198";
import * as Kc23b20389114 from "../Match/Kc23b20389114";
import * as K65149ce3b366 from "../Bit/K65149ce3b366";
export declare const $ByPattern: <A extends Q.ZM>(
  t0: Q.zmFold<A>
) => Q.zmFold<ByPattern<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class ByPattern<A extends Q.ZM> implements Q.ZM {
  readonly _0: Kb8cd13187198.List<
    Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>
  >;
  constructor(
    _0: Kb8cd13187198.List<
      Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>
    >
  );
  toString(): string;
  toStr(nested?: boolean): string;
  pretty(nested?: boolean): string;
  match<R>(m: {
    ByPattern: (
      v0: Kb8cd13187198.List<
        Kc23b20389114.Match<Kb8cd13187198.List<K65149ce3b366.Bit>>
      >
    ) => R;
  }): R;
  flatMaxSize(): number;
  flatEncode(st: Q.EncoderState): void;
}
