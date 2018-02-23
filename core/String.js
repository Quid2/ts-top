"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as Kb8cd13187198 from  '../ADT/List/Kb8cd13187198'
//import * as K066db52af145 from  '../ADT/Char/K066db52af145'
//import {Char} from  '../ADT/Char/K066db52af145'
exports.$String = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x2f, 0x00, 0x65, 0x95, 0x63, 0x8c],
    decoder: function (decoders) {
        //return function(st) { return new String(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)) }
        //return function(st) { return st.string();}
        return function (st) { return new String(st.string()); };
    }
};
//String.prototype.flatEncode = function (st:Q.EncoderState) {st.string(this);}
//String.prototype.flatSize = function() {return this.length*25+1;}
//export {String};
class String {
    constructor(value) {
        this.value = value;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return '"' + this.value.toString() + '"'; }
    // toStr(nested=false):string {
    //   //const reducer = (accumulator:string, currentValue:Char) => accumulator + currentValue.value;
    //   var cs:Char[]= Array.from(this.value);
    //   //var cs = this.value;
    //   var s ="";
    //   //console.log(this.value);
    //   //console.log(cs);
    //   for (var c of cs) s+=c.value;
    //   return s;
    //   }
    //match <R>(m:{String:(v0:Kb8cd13187198.List<K066db52af145.Char>)=>R}) : R {return m.String(this.value);}
    flatMaxSize() { return this.value.length * 25 + 1; }
    flatEncode(st) { st.string(this.value); }
}
exports.String = String;
//# sourceMappingURL=String.js.map