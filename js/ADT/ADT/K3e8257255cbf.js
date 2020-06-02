"use strict";
/** ZM Type:
ADT a b c ≡   ADT {declName :: a,
                   declNumParameters :: Kb1f46a49c8f8,
                   declCons :: Kda6836778fd4 (K86653e040025 b c)}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADT = exports.___ = exports.$ADT = void 0;
const Q = require("@quid2/ts-core");
const Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
const Kda6836778fd4 = require("../Maybe/Kda6836778fd4");
const K86653e040025 = require("../ConTree/K86653e040025");
exports.$ADT = function (t1, t2, t3) {
    return function (f) {
        return f(exports.___, [t1(f), t2(f), t3(f)]);
    };
};
exports.___ = {
    zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
    decoder: function (decoders) {
        return function (st) {
            return new ADT(decoders[0](st), Kb1f46a49c8f8.___.decoder([])(st), Kda6836778fd4.___.decoder([
                K86653e040025.___.decoder([decoders[1], decoders[2]]),
            ])(st));
        };
    },
};
class ADT {
    constructor(declName, declNumParameters, declCons) {
        this.declName = declName;
        this.declNumParameters = declNumParameters;
        this.declCons = declCons;
    }
    toString() {
        return this.toStr(false);
    }
    toStr(nested = false) {
        return Q.nestedPars(nested, [
            "ADT",
            this.declName.toStr(true),
            this.declNumParameters.toStr(true),
            this.declCons.toStr(true),
        ].join(" "));
    }
    pretty(nested = false) {
        return Q.nestedPars(nested, [
            "ADT",
            this.declName.pretty(true),
            this.declNumParameters.pretty(true),
            this.declCons.pretty(true),
        ].join(" "));
    }
    match(m) {
        return m.ADT(this.declName, this.declNumParameters, this.declCons);
    }
    flatMaxSize() {
        return (this.declName.flatMaxSize() +
            this.declNumParameters.flatMaxSize() +
            this.declCons.flatMaxSize());
    }
    flatEncode(st) {
        this.declName.flatEncode(st);
        this.declNumParameters.flatEncode(st);
        this.declCons.flatEncode(st);
    }
}
exports.ADT = ADT;
//# sourceMappingURL=K3e8257255cbf.js.map