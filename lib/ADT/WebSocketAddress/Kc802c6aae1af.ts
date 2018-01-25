import * as Q from '../../core'
import * as K306f1981b41c from  '../Bool/K306f1981b41c'
import * as Ke5d02571ce7b from  '../SocketAddress/Ke5d02571ce7b'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'

export const $WebSocketAddress:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<WebSocketAddress<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xc8,0x02,0xc6,0xaa,0xe1,0xaf],
  decoder : function (decoders) {
    return function(st) { return new WebSocketAddress (decoders[0](st),decoders[1](st),decoders[2](st)) }
  }
}

export class WebSocketAddress <A extends Q.Flat> implements Q.Flat {
  constructor(
    public secure: K306f1981b41c.Bool,
    public host: Ke5d02571ce7b.SocketAddress<A>,
    public path: Kb8cd13187198.List<K066db52af145.Char>,

  ) { }

  match <R>(m:{WebSocketAddress:(v0:K306f1981b41c.Bool,v1:Ke5d02571ce7b.SocketAddress<A>,v2:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.WebSocketAddress(this.secure,this.host,this.path);}
  flatMaxSize():number {return this.secure.flatMaxSize()+this.host.flatMaxSize()+this.path.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.secure.flatEncode(st);this.host.flatEncode(st);this.path.flatEncode(st);}

}


