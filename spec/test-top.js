"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var K65149ce3b366_1 = require("../ADT/Bit/K65149ce3b366");
function testTop() {
    var chan0 = new index_1.Channel(K65149ce3b366_1.$Bit, {
        onOpen: function (send, close) { },
        onError: function () { throw Error("Channel failed"); },
        onValue: function (v) { return console.log("received", v); }
    });
    var chan = new index_1.Channel(K65149ce3b366_1.$Bit, {
        onOpen: function (send, close) {
            try {
                for (var _a = __values([new K65149ce3b366_1.V1, new K65149ce3b366_1.V0, new K65149ce3b366_1.V1, new K65149ce3b366_1.V1, new K65149ce3b366_1.V1]), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var v = _b.value;
                    console.log(v);
                    send(v);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            close();
            var e_1, _c;
        },
        onError: function () { throw Error("Channel failed"); },
        onValue: function (v) { return console.log("received", v); }
    });
}
exports.testTop = testTop;
testTop();
//# sourceMappingURL=test-top.js.map