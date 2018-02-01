"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const K87f090a54ea3_1 = require("../ADT/ByType/K87f090a54ea3");
const K65149ce3b366_1 = require("../ADT/Bit/K65149ce3b366");
const Kb1f46a49c8f8_1 = require("../ADT/Word8/Kb1f46a49c8f8");
const Kf4c946334a7e_1 = require("../ADT/Word7/Kf4c946334a7e");
const Kbf2d1c86eb20_1 = require("../ADT/NonEmptyList/Kbf2d1c86eb20");
const K6260e465ae74_1 = require("../ADT/Either/K6260e465ae74");
const Kda6836778fd4_1 = require("../ADT/Maybe/Kda6836778fd4");
const K306f1981b41c_1 = require("../ADT/Bool/K306f1981b41c");
const Kc6627a317dbc_1 = require("../ADT/ChannelSelectionResult/Kc6627a317dbc");
const Kc802c6aae1af_1 = require("../ADT/WebSocketAddress/Kc802c6aae1af");
const K6cb2ee3ac409_1 = require("../ADT/IP4Address/K6cb2ee3ac409");
const Kb8cd13187198_1 = require("../ADT/List/Kb8cd13187198");
const K2e8b4519aeaa_1 = require("../ADT/Array/K2e8b4519aeaa");
const Kf8844385a443_1 = require("../ADT/Bytes/Kf8844385a443");
const Ka5583bf3ad34_1 = require("../ADT/Tuple2/Ka5583bf3ad34");
const K295e24d62fac_1 = require("../ADT/Word16/K295e24d62fac");
const K066db52af145_1 = require("../ADT/Char/K066db52af145");
function flatS(v, exp) {
    console.log("");
    console.log("Val:");
    console.log(v);
    console.log(v.toString());
    console.log("Max Size in Bits:");
    console.log(v.flatMaxSize());
    console.log("Flat:");
    console.log(index_1.flat(v).toString());
    console.log("Expected:");
    console.log(exp.toString());
}
function flatT(typ, v) {
    console.log("");
    console.log("Val:");
    console.log(v);
    console.log(v.toString());
    console.log("Max Size in Bits:");
    console.log(v.flatMaxSize());
    console.log("Flat:");
    console.log(index_1.flat(v).toString());
    console.log("Unflat:");
    console.log(index_1.unflat(typ(index_1.flatDecoder), index_1.flat(v)));
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
    flatT(K65149ce3b366_1.$Bit, new K65149ce3b366_1.V0);
    flatT(Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address)), new Kc6627a317dbc_1.Success);
    flatT(Kb8cd13187198_1.$List(K65149ce3b366_1.$Bit), new Kb8cd13187198_1.Cons(new K65149ce3b366_1.V0, new Kb8cd13187198_1.Cons(new K65149ce3b366_1.V1, new Kb8cd13187198_1.Nil)));
    flatT(K2e8b4519aeaa_1.$Array(K65149ce3b366_1.$Bit), new K2e8b4519aeaa_1.Array([new K65149ce3b366_1.V0, new K65149ce3b366_1.V1, new K65149ce3b366_1.V0]));
    flatT(Kf8844385a443_1.$Bytes, new Kf8844385a443_1.Bytes(new Uint8Array([11, 22, 33])));
    flatT(Kf4c946334a7e_1.$Word7, new Kf4c946334a7e_1.Word7(111));
    flatT(K295e24d62fac_1.$Word16, new K295e24d62fac_1.Word16(65535));
    flatT(Ka5583bf3ad34_1.$Tuple2(K65149ce3b366_1.$Bit, Kb1f46a49c8f8_1.$Word8), new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new Kb1f46a49c8f8_1.Word8(222)));
    flatT(Ka5583bf3ad34_1.$Tuple2(K65149ce3b366_1.$Bit, Kf4c946334a7e_1.$Word7), new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new Kf4c946334a7e_1.Word7(127)));
    flatT(Ka5583bf3ad34_1.$Tuple2(K65149ce3b366_1.$Bit, K295e24d62fac_1.$Word16), new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new K295e24d62fac_1.Word16(0)));
    flatT(Ka5583bf3ad34_1.$Tuple2(K65149ce3b366_1.$Bit, K295e24d62fac_1.$Word16), new Ka5583bf3ad34_1.Tuple2(new K65149ce3b366_1.V1, new K295e24d62fac_1.Word16(65535)));
    flatT(Kbf2d1c86eb20_1.$NonEmptyList(K65149ce3b366_1.$Bit), new Kbf2d1c86eb20_1.Cons(new K65149ce3b366_1.V0, new Kbf2d1c86eb20_1.Cons(new K65149ce3b366_1.V1, new Kbf2d1c86eb20_1.Elem(new K65149ce3b366_1.V0))));
    flatT(K066db52af145_1.$Char, new K066db52af145_1.Char('a'));
}
function testCore() {
    const l0 = new Kb8cd13187198_1.Nil;
    const l1 = new Kb8cd13187198_1.Cons(new K65149ce3b366_1.V0, new Kb8cd13187198_1.Cons(new K65149ce3b366_1.V1, new Kb8cd13187198_1.Nil));
    console.log("Array", Array.from(l1));
    console.log(l0.toString());
    for (var n0 of l0)
        console.log(n0);
    console.log(l1.toString());
    for (var n1 of l1)
        console.log(n1);
}
testCore();
//# sourceMappingURL=test-flat.js.map