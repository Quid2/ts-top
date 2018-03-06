import * as Q from '../../core'
import * as K0e1df25dc480 from  '../User/K0e1df25dc480'
import * as Kfced5b0f3c1f from  '../Subject/Kfced5b0f3c1f'
import * as K957357183935 from  '../Content/K957357183935'

export const $Message:Q.zmFold<Message> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x55,0x1d,0x9f,0x2a,0xdb,0x72],
  decoder : function (decoders) {
        return function(st) { return new Message(K0e1df25dc480.___.decoder([])(st),Kfced5b0f3c1f.___.decoder([])(st),K957357183935.___.decoder([K0e1df25dc480.___.decoder([]),___.decoder([])])(st)) }
  }
}

export class Message  implements Q.Flat {
  constructor(
    public fromUser: K0e1df25dc480.User,
    public subject: Kfced5b0f3c1f.Subject,
    public content: K957357183935.Content<K0e1df25dc480.User,Message>,

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return Q.nestedPars(nested,["Message",this.fromUser.toStr(true),this.subject.toStr(true),this.content.toStr(true)].join(' '))}
  match <R>(m:{Message:(v0:K0e1df25dc480.User,v1:Kfced5b0f3c1f.Subject,v2:K957357183935.Content<K0e1df25dc480.User,Message>)=>R}) : R {return m.Message(this.fromUser,this.subject,this.content);}
  flatMaxSize():number {return this.fromUser.flatMaxSize()+this.subject.flatMaxSize()+this.content.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.fromUser.flatEncode(st);this.subject.flatEncode(st);this.content.flatEncode(st);}

}


