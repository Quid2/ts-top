"use strict";
/** ZM Type:
Word7 ≡   V0
        | V1
        | V2
        | V3
        | V4
        | V5
        | V6
        | V7
        | V8
        | V9
        | V10
        | V11
        | V12
        | V13
        | V14
        | V15
        | V16
        | V17
        | V18
        | V19
        | V20
        | V21
        | V22
        | V23
        | V24
        | V25
        | V26
        | V27
        | V28
        | V29
        | V30
        | V31
        | V32
        | V33
        | V34
        | V35
        | V36
        | V37
        | V38
        | V39
        | V40
        | V41
        | V42
        | V43
        | V44
        | V45
        | V46
        | V47
        | V48
        | V49
        | V50
        | V51
        | V52
        | V53
        | V54
        | V55
        | V56
        | V57
        | V58
        | V59
        | V60
        | V61
        | V62
        | V63
        | V64
        | V65
        | V66
        | V67
        | V68
        | V69
        | V70
        | V71
  
*/
exports.__esModule = true;
var Q = require("../.././lib/core");
exports.$Word7 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder: function (decoders) {
        return function (st) { return new Word7(st.zmWord7(decoders)); };
    }
};
var Word7 = /** @class */ (function () {
    function Word7(value) {
        this.value = value;
    }
    Word7.prototype.flatMaxSize = function () { return Q.EncoderState.szWord7(this.value); };
    Word7.prototype.flatEncode = function (st) { st.zmWord7(this.value); };
    Word7.prototype.toString = function () { return this.toStr(false); };
    Word7.prototype.toStr = function (nested) { return this.value.toString(); };
    Word7.prototype.pretty = function (nested) { return this.toString(); };
    return Word7;
}());
exports.Word7 = Word7;
