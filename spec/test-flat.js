"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var K87f090a54ea3_1 = require("../ADT/ByType/K87f090a54ea3");
var K65149ce3b366_1 = require("../ADT/Bit/K65149ce3b366");
var Kb1f46a49c8f8_1 = require("../ADT/Word8/Kb1f46a49c8f8");
var Ka5583bf3ad34_1 = require("../ADT/Tuple2/Ka5583bf3ad34");
var K6260e465ae74_1 = require("../ADT/Either/K6260e465ae74");
var Kda6836778fd4_1 = require("../ADT/Maybe/Kda6836778fd4");
var K306f1981b41c_1 = require("../ADT/Bool/K306f1981b41c");
var Kf8844385a443_1 = require("../ADT/Bytes/Kf8844385a443");
function flatS(v, exp) {
    console.log("");
    console.log("Val:");
    console.debug(v);
    console.log("Max Size in Bits:");
    console.log(v.flatMaxSize());
    console.log("Flat:");
    console.log(index_1.flat(v).toString());
    console.log("Expected:");
    console.log(exp.toString());
}
function testFlat() {
    flatS(new Kb1f46a49c8f8_1.Word8(233), [233, 1]);
    flatS(new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new K65149ce3b366_1.V1), [128 + 64 + 1]);
    flatS(new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new Kb1f46a49c8f8_1.Word8(128 + 1)), [128 + 64, 128 + 1]);
    flatS(new Ka5583bf3ad34_1.Tuple2(new Kb1f46a49c8f8_1.Word8(128 + 1), new K65149ce3b366_1.V1), [129, 128 + 1]);
    flatS(K6260e465ae74_1.$Either(K306f1981b41c_1.$Bool, Kda6836778fd4_1.$Maybe(K306f1981b41c_1.$Bool))(index_1.zmType), [204, 76, 28, 140, 181, 206, 131, 6, 241, 152, 27, 65, 203, 105, 160, 217, 222, 63, 80, 96, 222, 51, 3, 104, 57]);
    flatS(index_1.typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(K306f1981b41c_1.$Bool)), [161, 252, 36, 41, 83, 168, 198, 13, 227, 48, 54, 131, 129, 1, 1, 0, 1]);
    flatS(index_1.typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(K65149ce3b366_1.$Bit)), [161, 252, 36, 41, 83, 168, 204, 162, 147, 156, 118, 108, 193, 1, 1, 0, 1]);
    flatS(index_1.typedBLOB(new K306f1981b41c_1.True, K306f1981b41c_1.$Bool), [24, 55, 140, 192, 218, 14, 1, 1, 129, 0, 1]);
    flatS(new Kf8844385a443_1.Bytes(new Uint8Array([11, 22, 33])), [1, 3, 11, 22, 33, 0, 1]);
    flatS(new Kf8844385a443_1.Bytes(new Uint8Array([])), [1, 0, 1]);
}
testFlat();
//# sourceMappingURL=test-flat.js.map