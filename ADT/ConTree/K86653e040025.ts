import * as Q from '../../core'
import * as K6260e465ae74 from  '../Either/K6260e465ae74'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K7028aa556ebc from  '../Type/K7028aa556ebc'
import * as Ka5583bf3ad34 from  '../Tuple2/Ka5583bf3ad34'

export const $ConTree:<A extends Q.Flat,B extends Q.Flat>(t0:Q.zmFold<A>,t1:Q.zmFold<B>) => Q.zmFold<ConTree<A,B>> = function (t1,t2) {return function (f) {return f(___,[t1(f),t2(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x86,0x65,0x3e,0x04,0x00,0x25],
  decoder : function (decoders) {
    const decs = {"Con":[Q.zmConst(decoders[0])(Q.flatDecoder),K6260e465ae74.$Either(Kb8cd13187198.$List(K7028aa556ebc.$Type(Q.zmConst(decoders[1]))),Kb8cd13187198.$List(Ka5583bf3ad34.$Tuple2(Q.zmConst(decoders[0]),K7028aa556ebc.$Type(Q.zmConst(decoders[1])))))(Q.flatDecoder)],"_ConTree":[$ConTree(Q.zmConst(decoders[0]),Q.zmConst(decoders[1]))(Q.flatDecoder),$ConTree(Q.zmConst(decoders[0]),Q.zmConst(decoders[1]))(Q.flatDecoder)]} ;
    return function(st) { if (st.zero()) { const d=decs["Con"]; return new Con(d[0](st),d[1](st)) } else { const d=decs["_ConTree"]; return new _ConTree(d[0](st),d[1](st)) } }

  }
}

export type ConTree <A extends Q.Flat,B extends Q.Flat> = Con <A,B> | _ConTree <A,B>

export class Con <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public constrName: A,
    public constrFields: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>,Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A,K7028aa556ebc.Type<B>>>>,

  ) { }

  match <R>(m:{Con:(v0:A,v1:K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>,Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A,K7028aa556ebc.Type<B>>>>)=>R,ConTree:(v0:ConTree<A,B>,v1:ConTree<A,B>)=>R}) : R {return m.Con(this.constrName,this.constrFields);}
  flatMaxSize():number {return 1+this.constrName.flatMaxSize()+this.constrFields.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.zero();this.constrName.flatEncode(st);this.constrFields.flatEncode(st);}

}

export class _ConTree <A extends Q.Flat,B extends Q.Flat> implements Q.Flat {
  constructor(
    public _0: ConTree<A,B>,
    public _1: ConTree<A,B>,

  ) { }

  match <R>(m:{Con:(v0:A,v1:K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>,Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A,K7028aa556ebc.Type<B>>>>)=>R,ConTree:(v0:ConTree<A,B>,v1:ConTree<A,B>)=>R}) : R {return m.ConTree(this._0,this._1);}
  flatMaxSize():number {return 1+this._0.flatMaxSize()+this._1.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {st.one();this._0.flatEncode(st);this._1.flatEncode(st);}

}


