import * as Q from '../core'
//import * as Kb8cd13187198 from  '../ADT/List/Kb8cd13187198'
//import * as K066db52af145 from  '../ADT/Char/K066db52af145'
//import {Char} from  '../ADT/Char/K066db52af145'

export const $String:Q.zmFold<String> = function (f) {return f(___,[])}

export const ___ : Q.zmTypeInfo = {
  zid : [0x2f,0x00,0x65,0x95,0x63,0x8c],
  decoder : function (decoders) {
        //return function(st) { return new String(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)) }
        //return function(st) { return st.string();}
        return function(st) { return new String(st.string());}
  }
}

//String.prototype.flatEncode = function (st:Q.EncoderState) {st.string(this);}

//String.prototype.flatSize = function() {return this.length*25+1;}

//export {String};

export class String  implements Q.Flat {
  constructor(
    public _0: string

  ) { }

  toString():string {return this.toStr(false)}
  toStr(nested=false):string {return '"'+this._0.toString()+'"';}
  // toStr(nested=false):string {
  //   //const reducer = (accumulator:string, currentValue:Char) => accumulator + currentValue._0;
  //   var cs:Char[]= Array.from(this._0);
  //   //var cs = this._0;
  //   var s ="";
  //   //console.log(this._0);
  //   //console.log(cs);
  //   for (var c of cs) s+=c._0;
  //   return s;
  //   }
  //match <R>(m:{String:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.String(this._0);}
  flatMaxSize():number {return this._0.length*25+1;}
  flatEncode(st:Q.EncoderState) {st.string(this._0);}

}


