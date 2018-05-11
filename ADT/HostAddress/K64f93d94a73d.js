"use strict";
/** ZM Type:
HostAddress a ≡   IPAddress a
                | DNSAddress (Kb8cd13187198 K066db52af145)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$HostAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x64, 0xf9, 0x3d, 0x94, 0xa7, 0x3d],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new IPAddress(decoders[0](st));
        }
        else {
            return new DNSAddress(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        } };
    }
};
class IPAddress {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["IPAddress", this._0.toStr(true)].join(' ')); }
    match(m) { return m.IPAddress(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); this._0.flatEncode(st); }
}
exports.IPAddress = IPAddress;
class DNSAddress {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["DNSAddress", this._0.toStr(true)].join(' ')); }
    match(m) { return m.DNSAddress(this._0); }
    flatMaxSize() { return 1 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); }
}
exports.DNSAddress = DNSAddress;
//# sourceMappingURL=K64f93d94a73d.js.map