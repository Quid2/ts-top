/** ZM Type:
SocketAddress a ≡   SocketAddress {socketAddress :: K64f93d94a73d a,
                               
*/

import * as Q from '../.././lib/core'
import * as K64f93d94a73d from  '../HostAddress/K64f93d94a73d'
import * as K0ab5ac6303b9 from  '../HostPort/K0ab5ac6303b9'

export const $SocketAddress:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<SocketAddress<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xe5,0xd0,0x25,0x71,0xce,0x7b],
  decoder : function (decoders) {
        return function(st) { return new SocketAddress(K64f93d94a73d.___.decoder([decoders[0]])(st),K0ab5ac6303b9.___.decoder([])(st)) }
  }
}


export class SocketAddress <A extends Q.ZM> implements Q.ZM {
  constructor(
    public socketAddress: K64f93d94a73d.HostAddress<A>,
    public socketPort: K0ab5ac6303b9.HostPort,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["SocketAddress",this.socketAddress.toStr(true),this.socketPort.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["SocketAddress",this.socketAddress.pretty(true),this.socketPort.pretty(true)].join(' '))}

  match <R>(m:{SocketAddress:(v0:K64f93d94a73d.HostAddress<A>,v1:K0ab5ac6303b9.HostPort)=>R}) : R {return m.SocketAddress(this.socketAddress,this.socketPort);}
  flatMaxSize():number {return this.socketAddress.flatMaxSize()+this.socketPort.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.socketAddress.flatEncode(st);this.socketPort.flatEncode(st);}

}


