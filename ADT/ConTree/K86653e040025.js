"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ConTree = function (t1, t2) { return function (f) { return f(___, [t1(f), t2(f)]); }; };
var ___ = {
    zid: [0x86, 0x65, 0x3e, 0x04, 0x00, 0x25],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Con(decoders[0](st), decoders[1](st));
        }
        else {
            return new _ConTree(decoders[0](st), decoders[1](st));
        } };
    }
};
var Con = (function () {
    function Con(constrName, constrFields) {
        this.constrName = constrName;
        this.constrFields = constrFields;
    }
    Con.prototype.match = function (m) { return m.Con(this.constrName, this.constrFields); };
    Con.prototype.flatMaxSize = function () { return 1 + this.constrName.flatMaxSize() + this.constrFields.flatMaxSize(); };
    Con.prototype.flatEncode = function (st) { st.zero(); this.constrName.flatEncode(st); this.constrFields.flatEncode(st); };
    return Con;
}());
exports.Con = Con;
var _ConTree = (function () {
    function _ConTree(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    _ConTree.prototype.match = function (m) { return m.ConTree(this._0, this._1); };
    _ConTree.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    _ConTree.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return _ConTree;
}());
exports._ConTree = _ConTree;
//# sourceMappingURL=K86653e040025.js.map