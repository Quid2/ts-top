/** ZM Type:
RepoProtocol ≡   Record (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | Solve K4bbd38587b9e
               | Solved K4bbd38587b9e
                        (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | AskDataTypes
               | KnownDataTypes (Kb8cd13187198 (Ka5583bf3ad34 K4bbd38587b9e
                                                              (K3e8257255cbf Kdc26e9d90047
                                                                             Kdc26e9d90047
                                                                             (K07b1b045ac3c K4bbd38587b9e))))
               | AskDataTypesRefs
               | KnownDataTypesRefs (Kb8cd13187198 (Ka5583bf3ad34 K4bbd38587b9e
                                                             
*/

import * as Q from '../.././lib/core'
import * as K3e8257255cbf from  '../ADT/K3e8257255cbf'
import * as Kdc26e9d90047 from  '../Identifier/Kdc26e9d90047'
import * as K07b1b045ac3c from  '../ADTRef/K07b1b045ac3c'
import * as K4bbd38587b9e from  '../AbsRef/K4bbd38587b9e'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as Ka5583bf3ad34 from  '../Tuple2/Ka5583bf3ad34'
import * as K2f006595638c from  '../String/K2f006595638c'

export const $RepoProtocol:Q.zmFold<RepoProtocol> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x35,0xd2,0x90,0x27,0xe7,0x50],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { if (st.zero()) { return new Record(K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]),Kdc26e9d90047.___.decoder([]),K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st)) } else { if (st.zero()) { return new Solve(K4bbd38587b9e.___.decoder([])(st)) } else { return new Solved(K4bbd38587b9e.___.decoder([])(st),K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]),Kdc26e9d90047.___.decoder([]),K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st)) } } } else { if (st.zero()) { if (st.zero()) { return new AskDataTypes() } else { return new KnownDataTypes(Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([K4bbd38587b9e.___.decoder([]),K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]),Kdc26e9d90047.___.decoder([]),K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])])])(st)) } } else { if (st.zero()) { return new AskDataTypesRefs() } else { return new KnownDataTypesRefs(Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([K4bbd38587b9e.___.decoder([]),K2f006595638c.___.decoder([])])])(st)) } } } }
  }
}


export type RepoProtocol  = Record  | Solve  | Solved  | AskDataTypes  | KnownDataTypes  | AskDataTypesRefs  | KnownDataTypesRefs 

export class Record  implements Q.ZM {
  constructor(
    public readonly _0: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Record",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Record",this._0.pretty(true)].join(' '))}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.Record(this._0);}
  flatMaxSize():number {return 2+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();this._0.flatEncode(st);}

}

export class Solve  implements Q.ZM {
  constructor(
    public readonly _0: K4bbd38587b9e.AbsRef,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Solve",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Solve",this._0.pretty(true)].join(' '))}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.Solve(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.zero();this._0.flatEncode(st);}

}

export class Solved  implements Q.ZM {
  constructor(
    public readonly _0: K4bbd38587b9e.AbsRef,
    public readonly _1: K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Solved",this._0.toStr(true),this._1.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Solved",this._0.pretty(true),this._1.pretty(true)].join(' '))}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.Solved(this._0,this._1);}
  flatMaxSize():number {return 3+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}

export class AskDataTypes  implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "AskDataTypes"}
  pretty(nested=false):string {return "AskDataTypes"}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.AskDataTypes;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.zero();}

}

export class KnownDataTypes  implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["KnownDataTypes",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["KnownDataTypes",this._0.pretty(true)].join(' '))}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.KnownDataTypes(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.one();this._0.flatEncode(st);}

}

export class AskDataTypesRefs  implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "AskDataTypesRefs"}
  pretty(nested=false):string {return "AskDataTypesRefs"}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.AskDataTypesRefs;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.zero();}

}

export class KnownDataTypesRefs  implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["KnownDataTypesRefs",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["KnownDataTypesRefs",this._0.pretty(true)].join(' '))}

  match <R>(m:{Record:(v0:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,Solve:(v0:K4bbd38587b9e.AbsRef)=>R,Solved:(v0:K4bbd38587b9e.AbsRef,v1:K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>)=>R,AskDataTypes:R,KnownDataTypes:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K3e8257255cbf.ADT<Kdc26e9d90047.Identifier,Kdc26e9d90047.Identifier,K07b1b045ac3c.ADTRef<K4bbd38587b9e.AbsRef>>>>)=>R,AskDataTypesRefs:R,KnownDataTypesRefs:(v0:Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<K4bbd38587b9e.AbsRef,K2f006595638c.String>>)=>R}) : R {return m.KnownDataTypesRefs(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();this._0.flatEncode(st);}

}


