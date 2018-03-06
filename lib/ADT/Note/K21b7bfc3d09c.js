"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../../core");
exports.$Note = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x21, 0xb7, 0xbf, 0xc3, 0xd0, 0x9c],
    decoder: function (decoders) {
        return function (st) { return new Note(decoders[0](st), decoders[1](st)); };
    }
};
class Note {
    constructor(annotation, object) {
        this.annotation = annotation;
        this.object = object;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Note", this.annotation.toStr(true), this.object.toStr(true)].join(' ')); }
    match(m) { return m.Note(this.annotation, this.object); }
    flatMaxSize() { return this.annotation.flatMaxSize() + this.object.flatMaxSize(); }
    flatEncode(st) { this.annotation.flatEncode(st); this.object.flatEncode(st); }
}
exports.Note = Note;
//# sourceMappingURL=K21b7bfc3d09c.js.map