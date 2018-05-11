"use strict";
/** ZM Type:
RepoProtocol ≡   Record (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | Solve K4bbd38587b9e
               | Solved K4bbd38587b9e
                        (K3e8257255cbf Kdc26e9d90047
                                       Kdc26e9d90047
                                       (K07b1b045ac3c K4bbd38587b9e))
               | AskDataTypes
               | KnownDataTypes (Kb8cd13187198 (Ka5583bf3ad34 K4bbd38587b9e
                                                              (K3e8257255cbf Kdc26e9d90047
                                                                             Kdc26e9d90047
                                                                             (K07b1b045ac3c K4bbd38587b9e))))
               | AskDataTypesRefs
               | KnownDataTypesRefs (Kb8cd13187198 (Ka5583bf3ad34 K4bbd38587b9e
                                                                  K2f006595638c))
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K3e8257255cbf = require("../ADT/K3e8257255cbf");
const Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
const K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
const K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
const K2f006595638c = require("../String/K2f006595638c");
exports.$RepoProtocol = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x35, 0xd2, 0x90, 0x27, 0xe7, 0x50],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            if (st.zero()) {
                return new Record(K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st));
            }
            else {
                if (st.zero()) {
                    return new Solve(K4bbd38587b9e.___.decoder([])(st));
                }
                else {
                    return new Solved(K4bbd38587b9e.___.decoder([])(st), K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])(st));
                }
            }
        }
        else {
            if (st.zero()) {
                if (st.zero()) {
                    return new AskDataTypes();
                }
                else {
                    return new KnownDataTypes(Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([K4bbd38587b9e.___.decoder([]), K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([K4bbd38587b9e.___.decoder([])])])])])(st));
                }
            }
            else {
                if (st.zero()) {
                    return new AskDataTypesRefs();
                }
                else {
                    return new KnownDataTypesRefs(Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([K4bbd38587b9e.___.decoder([]), K2f006595638c.___.decoder([])])])(st));
                }
            }
        } };
    }
};
class Record {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Record", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Record(this._0); }
    flatMaxSize() { return 2 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); st.zero(); this._0.flatEncode(st); }
}
exports.Record = Record;
class Solve {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Solve", this._0.toStr(true)].join(' ')); }
    match(m) { return m.Solve(this._0); }
    flatMaxSize() { return 3 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); st.one(); st.zero(); this._0.flatEncode(st); }
}
exports.Solve = Solve;
class Solved {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Solved", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.Solved(this._0, this._1); }
    flatMaxSize() { return 3 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.zero(); st.one(); st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports.Solved = Solved;
class AskDataTypes {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "AskDataTypes"; }
    match(m) { return m.AskDataTypes; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.one(); st.zero(); st.zero(); }
}
exports.AskDataTypes = AskDataTypes;
class KnownDataTypes {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["KnownDataTypes", this._0.toStr(true)].join(' ')); }
    match(m) { return m.KnownDataTypes(this._0); }
    flatMaxSize() { return 3 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.zero(); st.one(); this._0.flatEncode(st); }
}
exports.KnownDataTypes = KnownDataTypes;
class AskDataTypesRefs {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "AskDataTypesRefs"; }
    match(m) { return m.AskDataTypesRefs; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.one(); st.one(); st.zero(); }
}
exports.AskDataTypesRefs = AskDataTypesRefs;
class KnownDataTypesRefs {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["KnownDataTypesRefs", this._0.toStr(true)].join(' ')); }
    match(m) { return m.KnownDataTypesRefs(this._0); }
    flatMaxSize() { return 3 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.one(); st.one(); this._0.flatEncode(st); }
}
exports.KnownDataTypesRefs = KnownDataTypesRefs;
//# sourceMappingURL=K35d29027e750.js.map