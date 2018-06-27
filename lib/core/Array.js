"use strict";
exports.__esModule = true;
var Q = require("../core");
exports.$Array = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x2e, 0x8b, 0x45, 0x19, 0xae, 0xaa],
    decoder: function (decoders) {
        var dec = decoders[0];
        return function (st) {
            var arr = [];
            var blkLen;
            while (blkLen = st.bits8(8))
                for (var i = 0; i < blkLen; i++)
                    arr.push(dec(st));
            console.log(arr);
            return new Array(arr);
        };
    }
};
var Array = /** @class */ (function () {
    function Array(values) {
        this.values = values;
    }
    Array.prototype.flatMaxSize = function () {
        var len = this.values.length;
        var size = Q.arrayBlocks(len) * 8;
        for (var i = 0; i < len; i++)
            size += this.values[i].flatMaxSize();
        return size;
    };
    Array.prototype.flatEncode = function (st) {
        var vals = this.values;
        var numElems = vals.length;
        var inx = 0;
        var blkLen;
        while (blkLen = Math.min(255, numElems)) {
            st.bits(8, blkLen);
            for (var i = 0; i < blkLen; i++)
                vals[inx + i].flatEncode(st);
            numElems -= blkLen;
        }
        st.bits(8, 0);
    };
    Array.prototype.toString = function () { return this.toStr(); };
    Array.prototype.toStr = function (nested) {
        if (nested === void 0) { nested = false; }
        return this.values.toString();
    };
    return Array;
}());
exports.Array = Array;
