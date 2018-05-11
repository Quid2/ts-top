"use strict";
/** ZM Type:
ConTree a b ≡   Con {constrName :: a,
                     constrFields :: K6260e465ae74 (Kb8cd13187198 (K7028aa556ebc b))
                                                   (Kb8cd13187198 (Ka5583bf3ad34 a
                                                                                 (K7028aa556ebc b)))}
              | ConTree (↫ a b) (↫ a b)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const K6260e465ae74 = require("../Either/K6260e465ae74");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K7028aa556ebc = require("../Type/K7028aa556ebc");
const Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$ConTree = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x86, 0x65, 0x3e, 0x04, 0x00, 0x25],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Con(decoders[0](st), K6260e465ae74.___.decoder([Kb8cd13187198.___.decoder([K7028aa556ebc.___.decoder([decoders[1]])]), Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([decoders[0], K7028aa556ebc.___.decoder([decoders[1]])])])])(st));
        }
        else {
            return new _ConTree(exports.___.decoder([decoders[0], decoders[1]])(st), exports.___.decoder([decoders[0], decoders[1]])(st));
        } };
    }
};
class Con {
    constructor(constrName, constrFields) {
        this.constrName = constrName;
        this.constrFields = constrFields;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Con", this.constrName.toStr(true), this.constrFields.toStr(true)].join(' ')); }
    match(m) { return m.Con(this.constrName, this.constrFields); }
    flatMaxSize() { return 1 + this.constrName.flatMaxSize() + this.constrFields.flatMaxSize(); }
    flatEncode(st) { st.zero(); this.constrName.flatEncode(st); this.constrFields.flatEncode(st); }
}
exports.Con = Con;
class _ConTree {
    constructor(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["ConTree", this._0.toStr(true), this._1.toStr(true)].join(' ')); }
    match(m) { return m.ConTree(this._0, this._1); }
    flatMaxSize() { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); }
    flatEncode(st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); }
}
exports._ConTree = _ConTree;
//# sourceMappingURL=K86653e040025.js.map