import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $Content:<A extends Q.Flat,B extends Q.Flat>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<Content<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x95,0x73,0x57,0x18,0x39,0x35],
  decoder : function (decoders) {
    const decs = {"TextMessage":[Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder)],"Users":[Kb8cd13187198.$List(Q.zmConst(decoders[0]))(Q.flatDecoder)],"History":[Kb8cd13187198.$List(Q.zmConst(decoders[1]))(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { if (st.zero()) { if (st.zero()) { const d=decs["TextMessage"]; return new TextMessage(d[0](st)) } else { return new AskSubSubjects() } } else { if (st.zero()) { return new Join() } else { return new Leave() } } } else { if (st.zero()) { if (st.zero()) { return new Ping() } else { return new AskUsers() } } else { if (st.zero()) { const d=decs["Users"]; return new Users(d[0](st)) } else { if (st.zero()) { return new AskHistory() } else { const d=decs["History"]; return new History(d[0](st)) } } } } }

  }
}

export type Content <A extends Q.Flat,B extends Q.Flat> = TextMessage <A,B> | AskSubSubjects <A,B> | Join <A,B> | Leave <A,B> | Ping <A,B> | AskUsers <A,B> | Users <A,B> | AskHistory <A,B> | History <A,B>

export class TextMessage <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.TextMessage(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();st.zero();this._0.flatEncode(st);}

}

export class AskSubSubjects <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskSubSubjects;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.zero();st.one();}

}

export class Join <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Join;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.zero();}

}

export class Leave <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Leave;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.zero();st.one();st.one();}

}

export class Ping <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Ping;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.zero();}

}

export class AskUsers <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskUsers;}
  flatMaxSize():number {return 3+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.zero();st.one();}

}

export class Users <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<A>,

  ) { }

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.Users(this._0);}
  flatMaxSize():number {return 3+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.zero();this._0.flatEncode(st);}

}

export class AskHistory <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.AskHistory;}
  flatMaxSize():number {return 4+0;}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();st.zero();}

}

export class History <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: Kb8cd13187198.List<B>,

  ) { }

  match <R>(m:{TextMessage:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R,AskSubSubjects:R,Join:R,Leave:R,Ping:R,AskUsers:R,Users:(v0:Kb8cd13187198.List<A>)=>R,AskHistory:R,History:(v0:Kb8cd13187198.List<B>)=>R}) : R {return m.History(this._0);}
  flatMaxSize():number {return 4+this._0.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();st.one();st.one();st.one();this._0.flatEncode(st);}

}


