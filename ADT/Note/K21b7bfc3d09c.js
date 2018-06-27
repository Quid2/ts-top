"use strict";
/** ZM Type:
Note a b ≡   Note {annotation :: a, object :: b}
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Note = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x21, 0xb7, 0xbf, 0xc3, 0xd0, 0x9c],
    decoder: function (decoders) {
        return function (st) { return new Note(decoders[0](st), decoders[1](st)); };
    }
};
var Note = /** @class */ (function () {
    function Note(annotation, object) {
        this.annotation = annotation;
        this.object = object;
    }
    Note.prototype.toString = function () { return this.toStr(false); };
    Note.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return Q.nestedPars(nested, ["Note", this.annotation.toStr(true), this.object.toStr(true)].join(' '));
    };
    Note.prototype.match = function (m) { return m.Note(this.annotation, this.object); };
    Note.prototype.flatMaxSize = function () { return this.annotation.flatMaxSize() + this.object.flatMaxSize(); };
    Note.prototype.flatEncode = function (st) { this.annotation.flatEncode(st); this.object.flatEncode(st); };
    return Note;
}());
exports.Note = Note;
