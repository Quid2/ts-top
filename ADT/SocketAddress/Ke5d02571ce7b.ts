import * as Q from '../../core'
import * as K64f93d94a73d from  '../HostAddress/K64f93d94a73d'
import * as K0ab5ac6303b9 from  '../HostPort/K0ab5ac6303b9'

export const $SocketAddress:<A extends Q.Flat>(t0:Q.zmFold<A>) => Q.zmFold<SocketAddress<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

const ___ : Q.zmTypeInfo = {
  zid : [0xe5,0xd0,0x25,0x71,0xce,0x7b],
  decoder : function (decoders) {
    const decs = {"SocketAddress":[K64f93d94a73d.$HostAddress(Q.zmConst(decoders[0]))(Q.flatDecoder),K0ab5ac6303b9.$HostPort(Q.flatDecoder)]} ;
    return function(st) { const d=decs["SocketAddress"]; return new SocketAddress(d[0](st),d[1](st)) }

  }
}

export class SocketAddress <A extends Q.Flat> implements Q.Flat {
  constructor(
    public socketAddress: K64f93d94a73d.HostAddress<A>,
    public socketPort: K0ab5ac6303b9.HostPort,

  ) { }

  match <R>(m:{SocketAddress:(v0:K64f93d94a73d.HostAddress<A>,v1:K0ab5ac6303b9.HostPort)=>R}) : R {return m.SocketAddress(this.socketAddress,this.socketPort);}
  flatMaxSize():number {return this.socketAddress.flatMaxSize()+this.socketPort.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.socketAddress.flatEncode(st);this.socketPort.flatEncode(st);}

}


