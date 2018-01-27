import * as Q from '../../core'
import * as K3e8257255cbf from  '../ADT/K3e8257255cbf'
import * as Kdc26e9d90047 from  '../Identifier/Kdc26e9d90047'
import * as K07b1b045ac3c from  '../ADTRef/K07b1b045ac3c'
import * as K4bbd38587b9e from  '../AbsRef/K4bbd38587b9e'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as Ka5583bf3ad34 from  '../Tuple2/Ka5583bf3ad34'

export const $RepoProtocol:Q.zmFold<RepoProtocol> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x05,0xc7,0xd8,0x93,0xe9,0xd5],
  decoder : function (decoders) {
    const decs = {"Record":[K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier,Kdc26e9d90047.$Identifier,K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))(Q.flatDecoder)],"Solve":[K4bbd38587b9e.$AbsRef(Q.flatDecoder)],"Solved":[K4bbd38587b9e.$AbsRef(Q.flatDecoder),K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier,Kdc26e9d90047.$Identifier,K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))(Q.flatDecoder)],"KnownDataTypes":[Kb8cd13187198.$List(Ka5583bf3ad34.$Tuple2(K4bbd38587b9e.$AbsRef,K3e8257255cbf.$ADT(Kdc26e9d90047.$Identifier,Kdc26e9d90047.$Identifier,K07b1b045ac3c.$ADTRef(K4bbd38587b9e.$AbsRef))))(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { if (st.zero()) { const d=decs["Record"]; return new Record(d[0](st)) } else { const d=decs["Solve"]; return new Solve(d[0](st)) } } else { if (st.zero()) { const d=decs["Solved"]; return new Solved(d[0](st),d[1](st)) } else { if (st.zero()) { return new AskDataTypes() } else { const d=decs["KnownDataTypes"]; return new KnownDataTypes(d[0](st)) } } } }

  }
}

export type RepoProtocol  = Record  | Solve  | Solved  | AskDataTypes  | KnownDataTypes 

export class Record  implements Q.Flat {
  constructor(
    public _0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>,

  ) { }

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R}) : R {return m.Record(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();this._0.flatEncode(st);}

}

export class Solve  implements Q.Flat {
  constructor(
    public _0: K4bbd38587b9e.AbsRef,

  ) { }

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R}) : R {return m.Solve(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();this._0.flatEncode(st);}

}

export class Solved  implements Q.Flat {
  constructor(
    public _0: K4bbd38587b9e.AbsRef,
    public _1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>,

  ) { }

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R}) : R {return m.Solved(this._0,this._1);}
  flatMaxSize():number {return 2+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();this._0.flatEncode(st);this._1.flatEncode(st);}

}

export class AskDataTypes  implements Q.Flat {

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R}) : R {return m.AskDataTypes;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.zero();}

}

export class KnownDataTypes  implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>,

  ) { }

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R}) : R {return m.KnownDataTypes(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();this._0.flatEncode(st);}

}


