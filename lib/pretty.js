"use strict";
exports.__esModule = true;
var K33445520c45a_1 = require("../ADT/UnicodeLetterOrNumberOrLine/K33445520c45a");
var K3878b3580fc5_1 = require("../ADT/UnicodeLetter/K3878b3580fc5");
var K4bbd38587b9e_1 = require("../ADT/AbsRef/K4bbd38587b9e");
var K9f214799149b_1 = require("../ADT/SHAKE128_48/K9f214799149b");
var K066db52af145_1 = require("../ADT/Char/K066db52af145");
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
//AbsRef.prototype.toStr = function () {return "PRETTY"+prettyAbsRef(this)} 
//ADT.prototype.pretty = function () { return "K" + this._0.pretty();}
K3878b3580fc5_1.UnicodeLetter.prototype.pretty = function () { return this._0.pretty(); };
K33445520c45a_1.UnicodeLetterOrNumberOrLine.prototype.pretty = function () { return this._0.pretty(); };
// Char.prototype.toStr = function(nested = false): string { return "'" + this._0.toString() + "'"; }
K066db52af145_1.Char.prototype.pretty = function () { return "'" + this.value.toString() + "'"; };
K4bbd38587b9e_1.AbsRef.prototype.pretty = function () { return "K" + this._0.pretty(); };
K9f214799149b_1.SHAKE128_48.prototype.pretty = function () {
    function asHex(v) { var r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
    return asHex(this._0) + asHex(this._1) + asHex(this._2) + asHex(this._3) + asHex(this._4) + asHex(this._5);
};
//export function prettyADT(o:ADT<) : string { 
//}
// export function prettyAbsRef(r: AbsRef): string {
//     return "K" + prettyShake48(r._0);
// }
// export function prettyShake48<I extends ZM>(s: SHAKE128_48<I>): string {
//     function asHex(v: Word8) { const r = v.value.toString(16); return r.length == 1 ? '0' + r : r; }
//     return asHex(s._0) + asHex(s._1) + asHex(s._2) + asHex(s._3) + asHex(s._4) + asHex(s._5);
// } 
