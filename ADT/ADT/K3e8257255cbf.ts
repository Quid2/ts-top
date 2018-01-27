import * as Q from '../../core'
import * as Kb1f46a49c8f8 from  '../Word8/Kb1f46a49c8f8'
import * as Kda6836778fd4 from  '../Maybe/Kda6836778fd4'
import * as K86653e040025 from  '../ConTree/K86653e040025'

export const $ADT:<A extends Q.Flat,B extends Q.Flat,C extends Q.Flat>(t0:Q.zmFold<A>,t1:Q.zmFold<B>,t2:Q.zmFold<C>) => Q.zmFold<ADT<A,B,C>> = function (t1,t2,t3) {return function (f) {return f(___,[t1(f),t2(f),t3(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0x3e,0x82,0x57,0x25,0x5c,0xbf],
  decoder : function (decoders) {
    const decs = {"ADT":[Q.zmConst(decoders[0])(Q.flatDecoder),Kb1f46a49c8f8.$Word8(Q.flatDecoder),Kda6836778fd4.$Maybe(K86653e040025.$ConTree(Q.zmConst(decoders[1]),Q.zmConst(decoders[2])))(Q.flatDecoder)]} ;
    return function(st) { const d=decs["ADT"]; return new ADT(d[0](st),d[1](st),d[2](st)) }

  }
}

export class ADT <A extends Q.Flat,B extends Q.Flat,C extends Q.Flat> implements Q.Flat {
  constructor(
    public declName: A,
    public declNumParameters: Kb1f46a49c8f8.Word8,
    public declCons: Kda6836778fd4.Maybe<K86653e040025.ConTree<B,C>>,

  ) { }

  match <R>(m:{ADT:(v0:A,v1:Kb1f46a49c8f8.Word8,v2:Kda6836778fd4.Maybe<K86653e040025.ConTree<B,C>>)=>R}) : R {return m.ADT(this.declName,this.declNumParameters,this.declCons);}
  flatMaxSize():number {return this.declName.flatMaxSize()+this.declNumParameters.flatMaxSize()+this.declCons.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.declName.flatEncode(st);this.declNumParameters.flatEncode(st);this.declCons.flatEncode(st);}

}


