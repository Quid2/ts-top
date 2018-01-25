"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bool = function (f) { return f(___, []); };
var ___ = {
    zid: [0x30, 0x6f, 0x19, 0x81, 0xb4, 0x1c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new False();
        }
        else {
            return new True();
        } };
    }
};
var False = (function () {
    function False() {
    }
    False.prototype.match = function (m) { return m.False; };
    False.prototype.flatMaxSize = function () { return 1 + 0; };
    False.prototype.flatEncode = function (st) { st.zero(); };
    return False;
}());
exports.False = False;
var True = (function () {
    function True() {
    }
    True.prototype.match = function (m) { return m.True; };
    True.prototype.flatMaxSize = function () { return 1 + 0; };
    True.prototype.flatEncode = function (st) { st.one(); };
    return True;
}());
exports.True = True;
//# sourceMappingURL=K306f1981b41c.js.map