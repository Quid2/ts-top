/** ZM Type:
Content a b ≡   TextMessage (Kb8cd13187198 K066db52af145)
              | AskSubSubjects
              | Join
              | Leave
              | Ping
              | AskUsers
              | Users (Kb8cd13187198 a)
              | AskHistory
              | History (Kb8cd13187198 b)
*/

import * as Q from '../.././lib/core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $Content:<A extends Q.ZM,B extends Q.ZM>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<Content<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0x95,0x73,0x57,0x18,0x39,0x35],
  decoder : function (decoders) {
        return function(st) { if (st.zero()) { if (st.zero()) { if (st.zero()) { return new TextMessage(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)) } else { return new AskSubSubjects() } } else { if (st.zero()) { return new Join() } else { return new Leave() } } } else { if (st.zero()) { if (st.zero()) { return new Ping() } else { return new AskUsers() } } else { if (st.zero()) { return new Users(Kb8cd13187198.___.decoder([decoders[0]])(st)) } else { if (st.zero()) { return new AskHistory() } else { return new History(Kb8cd13187198.___.decoder([decoders[1]])(st)) } } } } }
  }
}


export type Content <A extends Q.ZM,B extends Q.ZM> = TextMessage <A,B> | AskSubSubjects <A,B> | Join <A,B> | Leave <A,B> | Ping <A,B> | AskUsers <A,B> | Users <A,B> | AskHistory <A,B> | History <A,B>

export class TextMessage <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["TextMessage",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["TextMessage",this._0.pretty(true)].join(' '))}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.TextMessage(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();st.zero();this._0.flatEncode(st);}

}

export class AskSubSubjects <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "AskSubSubjects"}
  pretty(nested=false):string {return "AskSubSubjects"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskSubSubjects;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();st.one();}

}

export class Join <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Join"}
  pretty(nested=false):string {return "Join"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Join;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.zero();}

}

export class Leave <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Leave"}
  pretty(nested=false):string {return "Leave"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Leave;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.one();}

}

export class Ping <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "Ping"}
  pretty(nested=false):string {return "Ping"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Ping;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.zero();}

}

export class AskUsers <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "AskUsers"}
  pretty(nested=false):string {return "AskUsers"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskUsers;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.one();}

}

export class Users <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<A>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Users",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["Users",this._0.pretty(true)].join(' '))}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Users(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.zero();this._0.flatEncode(st);}

}

export class AskHistory <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return "AskHistory"}
  pretty(nested=false):string {return "AskHistory"}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskHistory;}
  flatMaxSize():number {return 4+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();st.zero();}

}

export class History <A extends Q.ZM,B extends Q.ZM> implements Q.ZM {
  constructor(
    public readonly _0: Kb8cd13187198.List<B>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["History",this._0.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["History",this._0.pretty(true)].join(' '))}

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.History(this._0);}
  flatMaxSize():number {return 4+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();st.one();this._0.flatEncode(st);}

}


