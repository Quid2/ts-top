import { zmId, zmTypeInfo, zmFold, ZM } from "@quid2/prim";
import { Type } from "@quid2/adt/Type/K7028aa556ebc";
import { AbsRef } from "@quid2/adt/AbsRef/K4bbd38587b9e";
export { zmType, zmId, zmTypeInfo, ZM, zmFold };
/** Apply to a type to create the corresponding ZM type
 *
 * TODO zmType()...
 *
 * 2+2 // =>  44
 *
 * @param t the type to apply
 * @param ts the types to which 't' is applied
 * @return the applied type
 */
declare function zmType(t: zmTypeInfo, ts: Type<AbsRef>[]): Type<AbsRef>;
//# sourceMappingURL=zm.d.ts.map