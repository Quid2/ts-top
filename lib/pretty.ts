import { UnicodeLetterOrNumberOrLine } from '../ADT/UnicodeLetterOrNumberOrLine/K33445520c45a';
import { UnicodeLetter } from '../ADT/UnicodeLetter/K3878b3580fc5';
import { AbsRef } from '../ADT/AbsRef/K4bbd38587b9e'
import { Word8 } from '../ADT/Word8/Kb1f46a49c8f8'
import { SHAKE128_48 } from '../ADT/SHAKE128_48/K9f214799149b'
import { Char } from '../ADT/Char/K066db52af145'
import { Name } from '../ADT/Identifier/Kdc26e9d90047';
import { prettyConcat, prettyString } from '../ADT/List/Kb8cd13187198'
import { Con, _ConTree } from '../ADT/ConTree/K86653e040025'
import { ZM } from './core'
import { ADT } from '../ADT/ADT/K3e8257255cbf'
//import {Name}

// Check https://www.bennadel.com/blog/3290-using-module-augmentation-to-safely-inject-runtime-methods-using-typescript-and-node-js.htm

// interface Pretty<A> {
//     pretty<A>(v: A): string
// }

// declare module '../ADT/AbsRef/K4bbd38587b9e' {
//     // interface Flat {
//     //     pretty(): string
//     // }

//     // Selectively add pretty to some classes.
//     // interface AbsRef {
//     //     pretty(): string
//     // }

//     // //interface SHAKE128_48<A extends Flat> {
//     // interface SHAKE128_48<A> {
//     //     pretty(): string
//     // }
// }

// class AbsRef implements Pretty {
//     pretty() { return "PRETTY" + prettyAbsRef(this) }
// }


function str(s: string): string { return '"' + s + '"'; }

function vars(numVars: number) {
    let vs = ""
    for (var n = 0; n < numVars; n++) { vs += String.fromCharCode(97 + n) + " " }
    return vs
}

// function prettyConTree<A extends ZM, B extends ZM>(conTree: ConTree<A, B>): string {
//     return conTree.match({
//         Con: (name, pars) => name.pretty()
//         , ConTree: (left,right) = prettyCon })
// }


Con.prototype.pretty = function () {
    return this.constrName.pretty() + " " + this.constrFields.pretty();
}

_ConTree.prototype.pretty = function () {
    return this._0.pretty() + this._1.pretty();
}

ADT.prototype.pretty = function () {
    return this.declName.pretty() + " " + vars(this.declNumParameters.value) + this.declCons.match({ Nothing: "", Just: (conTree) => "= " + conTree.pretty() });
}

Name.prototype.pretty = function () {
    //return this.match({ Name: (h, l) => h.pretty() +})
    return str(this._0.pretty() + prettyConcat(this._1));
}

UnicodeLetter.prototype.pretty = function () { return this._0.pretty(); }
UnicodeLetterOrNumberOrLine.prototype.pretty = function () { return this._0.pretty(); }

// Char.prototype.toStr = function(nested = false): string { return "'" + this._0.toString() + "'"; }
//Char.prototype.pretty = function () { return "'" + this.value.toString() + "'"; }
Char.prototype.pretty = function () { return this.value; }

AbsRef.prototype.pretty = function () { return "K" + this._0.pretty(); }

SHAKE128_48.prototype.pretty = function () {
    function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
    return asHex(this._0) + asHex(this._1) + asHex(this._2) + asHex(this._3) + asHex(this._4) + asHex(this._5);
}


//export function prettyADT(o:ADT<) : string { 
//}

// export function prettyAbsRef(r: AbsRef): string {
//     return "K" + prettyShake48(r._0);
// }

// export function prettyShake48<I extends ZM>(s: SHAKE128_48<I>): string {
//     function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
//     return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
// }

export { str, prettyConcat, prettyString }