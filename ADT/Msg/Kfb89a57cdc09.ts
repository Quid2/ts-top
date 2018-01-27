import * as Q from '../../core'
import * as Kb8cd13187198 from  '../List/Kb8cd13187198'
import * as K066db52af145 from  '../Char/K066db52af145'
import * as Kfced5b0f3c1f from  '../Subject/Kfced5b0f3c1f'
import * as K1ba230d92eb8 from  '../Content/K1ba230d92eb8'

export const $Msg:Q.zmFold<Msg> = function (f) {return f(___,[])}

const ___ : Q.zmTypeInfo = {
  zid : [0xfb,0x89,0xa5,0x7c,0xdc,0x09],
  decoder : function (decoders) {
    const decs = {"Msg":[Kb8cd13187198.$List(K066db52af145.$Char)(Q.flatDecoder),Kfced5b0f3c1f.$Subject(Q.flatDecoder),K1ba230d92eb8.$Content(Q.flatDecoder)]} ;
    return function(st) { const d=decs["Msg"]; return new Msg(d[0](st),d[1](st),d[2](st)) }

  }
}

export class Msg  implements Q.Flat {
  constructor(
    public fromUser: Kb8cd13187198.List<K066db52af145.Char>,
    public subject: Kfced5b0f3c1f.Subject,
    public content: K1ba230d92eb8.Content,

  ) { }

  match <R>(m:{Msg:(v0:Kb8cd13187198.List<K066db52af145.Char>,v1:Kfced5b0f3c1f.Subject,v2:K1ba230d92eb8.Content)=>R}) : R {return m.Msg(this.fromUser,this.subject,this.content);}
  flatMaxSize():number {return this.fromUser.flatMaxSize()+this.subject.flatMaxSize()+this.content.flatMaxSize();}
  flatEncode(st:Q.EncoderState) {this.fromUser.flatEncode(st);this.subject.flatEncode(st);this.content.flatEncode(st);}

}


