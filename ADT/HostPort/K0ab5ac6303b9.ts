import * as Q from '../../core'
import * as K295e24d62fac from  '../Word16/K295e24d62fac'

export const $HostPort:Q.zmFold<HostPort> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0x0a,0xb5,0xac,0x63,0x03,0xb9],
  decoder : function (decoders) {
    return function(st) { return new HostPort (decoders[0](st)) }
  }
}

export class HostPort  implements Q.Flat {
  constructor(
    public port: K295e24d62fac.Word16,

  ) { }

  match <R>(m:{HostPort:(v0:K295e24d62fac.Word16)=>R}) : R {return m.HostPort(this.port);}
  flatMaxSize():number {return this.port.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.port.flatEncode(st);}

}


