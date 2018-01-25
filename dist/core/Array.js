"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../core");
exports.$Array = function (t1) { return function (f) { return f(___, [t1(f)]); }; };
var ___ = {
    zid: [0x2e, 0x8b, 0x45, 0x19, 0xae, 0xaa],
    decoder: function (decoders) {
        var dec = decoders[0];
        return function (st) {
            var arr = [];
            var blkLen;
            while (blkLen = st.bits8(8))
                for (var i = 0; i < blkLen; i++)
                    arr.push(dec(st));
            return arr;
        };
    }
};
var Array = (function () {
    function Array(values) {
        this.values = values;
    }
    Array.prototype.flatMaxSize = function () {
        var len = this.values.length;
        var size = Q.arrayBlocks(len);
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
    return Array;
}());
exports.Array = Array;
//# sourceMappingURL=Array.js.map