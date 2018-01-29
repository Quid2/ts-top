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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var top_1 = require("../top");
var K65149ce3b366_1 = require("../ADT/Bit/K65149ce3b366");
function testTop() {
    var chan0 = new top_1.Channel(K65149ce3b366_1.$Bit, {
        onOpen: function (send, close) { },
        onError: function () { throw Error("Channel failed"); },
        onValue: function (v) { return console.log("received", v); }
    });
    var chan = new top_1.Channel(K65149ce3b366_1.$Bit, {
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
function testTopRX() {
    var received = [];
    function log(n, v) { received.push([n, v]); }
    var _a = __read(top_1.channel(K65149ce3b366_1.$Bit), 2), inChan = _a[0], outChan = _a[1];
    var inSubscription = inChan.subscribe({
        next: function (x) { return log("1.1", x); },
        error: function (err) { return console.error('inChan:error', err); },
        complete: function () { return console.log('inChan:complete'); },
    });
    var inSubscription2 = inChan.subscribe({
        next: function (x) { return log("1.2", x); },
        error: function (err) { return console.error('inChan:error', err); },
        complete: function () { return console.log('inChan:complete'); },
    });
    var _b = __read(top_1.channel(K65149ce3b366_1.$Bit), 2), inChan2 = _b[0], outChan2 = _b[1];
    inChan2.subscribe({
        next: function (x) { return log("2.1", x); },
        error: function (err) { return console.error('inChan:error', err); },
        complete: function () { return console.log('inChan:complete'); },
    });
    setTimeout(function () {
        outChan.next(new K65149ce3b366_1.V0);
        outChan2.next(new K65149ce3b366_1.V1);
    }, 2000);
    setTimeout(function () {
        console.log("Received", received, received == [["2.1", new K65149ce3b366_1.V0], ["1.1", new K65149ce3b366_1.V1], ["1.2", new K65149ce3b366_1.V1]], new K65149ce3b366_1.V0 == new K65149ce3b366_1.V0, "1.1" == "1.1");
        console.log(received, received.join(","), JSON.stringify(received), JSON.stringify(new K65149ce3b366_1.V1), (new K65149ce3b366_1.V1));
    }, 3000);
}
testTopRX();
//# sourceMappingURL=test-top.js.map