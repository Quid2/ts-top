/** ZM Type:
HostPort ≡   HostPort {port :: K295e24d62fac}
*/

import * as Q from '../.././lib/core'
import * as K295e24d62fac from  '../Word16/K295e24d62fac'

export const $HostPort:Q.zmFold<HostPort> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x0a,0xb5,0xac,0x63,0x03,0xb9],
  decoder : function (decoders) {
        return function(st) { return new HostPort(K295e24d62fac.___.decoder([])(st)) }
  }
}


export class HostPort  implements Q.ZM {
  constructor(
    public readonly port: K295e24d62fac.Word16,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["HostPort",this.port.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["HostPort",this.port.pretty(true)].join(' '))}

  match <R>(m:{HostPort:(v0:K295e24d62fac.Word16)=>R}) : R {return m.HostPort(this.port);}
  flatMaxSize():number {return this.port.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.port.flatEncode(st);}

}


