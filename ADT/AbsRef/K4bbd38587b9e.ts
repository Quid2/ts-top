import * as Q from '../../core'
import * as K9f214799149b from  '../SHAKE128_48/K9f214799149b'
import * as K3e8257255cbf from  '../ADT/K3e8257255cbf'
import * as Kdc26e9d90047 from  '../Identifier/Kdc26e9d90047'
import * as K07b1b045ac3c from  '../ADTRef/K07b1b045ac3c'

export const $AbsRef:Q.zmFold<AbsRef> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x4b,0xbd,0x38,0x58,0x7b,0x9e],
  decoder : function (decoders) {
    const decs = {"AbsRef":[K9f214799149b.$SHAKE128_48(K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier,Kdc26e9d90047.$Identifier,K07b1b045ac3c.$ADTRef($AbsRef)))(Q.flatDecoder)]} ;
    return function(st) { const d=decs["AbsRef"]; return new AbsRef(d[0](st)) }

  }
}

export class AbsRef  implements Q.Flat {
  constructor(
    public _0: K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<AbsRef>>>,

  ) { }

  match <R>(m:{AbsRef:(v0:K9f214799149b.SHAKE128_48<K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<AbsRef>>>)=>R}) : R {return m.AbsRef(this._0);}
  flatMaxSize():number {return this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this._0.flatEncode(st);}

}


