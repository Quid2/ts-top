/** ZM Type:
BLOB a ≡   BLOB {encoding :: a, content :: Kf8844385a443}
*/

import * as Q from '../.././lib/core'
import * as Kf8844385a443 from  '../Bytes/Kf8844385a443'

export const $BLOB:<A extends Q.ZM>(t0:Q.zmFold<A>) => Q.zmFold<BLOB<A>> = function (t1) {return function (f) {return f(___,[t1(f)])}}

export const ___ : Q.zmTypeInfo = {
  zid : [0xf1,0x39,0xd4,0x75,0x1f,0xda],
  decoder : function (decoders) {
        return function(st) { return new BLOB(decoders[0](st),Kf8844385a443.___.decoder([])(st)) }
  }
}


export class BLOB <A extends Q.ZM> implements Q.ZM {
  constructor(
    public encoding: A,
    public content: Kf8844385a443.Bytes,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["BLOB",this.encoding.toStr(true),this.content.toStr(true)].join(' '))}
  pretty(nested=false):string {return Q.nestedPars(nested,["BLOB",this.encoding.pretty(true),this.content.pretty(true)].join(' '))}

  match <R>(m:{BLOB:(v0:A,v1:Kf8844385a443.Bytes)=>R}) : R {return m.BLOB(this.encoding,this.content);}
  flatMaxSize():number {return this.encoding.flatMaxSize()+this.content.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.encoding.flatEncode(st);this.content.flatEncode(st);}

}


