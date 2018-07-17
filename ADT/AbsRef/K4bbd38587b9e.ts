/** ZM Type:
AbsRef ≡   AbsRef (K9f214799149b (K3e8257255cbf Kdc26e9d90047
                                                Kdc26e9d90047
                                                (K07b1b045ac3c ↫)))
*/

import * as Q from '../.././lib/core'
import * as K9f214799149b from  '../SHAKE128_48/K9f214799149b'
import * as K3e8257255cbf from  '../ADT/K3e8257255cbf'
import * as Kdc26e9d90047 from  '../Identifier/Kdc26e9d90047'
import * as K07b1b045ac3c from  '../ADTRef/K07b1b045ac3c'

export const $AbsRef:Q.zmFold<AbsRef> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x4b,0xbd,0x38,0x58,0x7b,0x9e],
  decoder : function (decoders) {
        return function(st) { return new AbsRef(K9f214799149b.___.decoder([K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]),Kdc26e9d90047.___.decoder([]),K07b1b045ac3c.___.decoder([___.decoder([])])])])(st)) }
  }
}


export class AbsRef  implements Q.ZM {
  constructor(
    public readonly _0: K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<AbsRef>>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["AbsRef",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["AbsRef",this._0.pretty(true)].join(' '))}

  match <R>(m:{AbsRef:(v0:K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<AbsRef>>>)=>R}) : R {return m.AbsRef(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


