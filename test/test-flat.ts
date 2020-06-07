import {
  flat,
  zmType,
  typedBLOB,
  zmFold,
  Flat,
  flatDecoder,
  unflat,
} from "../ts/index";
import { ByType, $ByType } from "@quid2/ts/ADT/ByType/K87f090a54ea3";
import { Bit, V0, V1, $Bit } from "@quid2/ts/ADT/Bit/K65149ce3b366";
// import { TypedBLOB } from '@quid2/ts/ADT/TypedBLOB/K614edd84c8bd'
import { $Word8, Word8 } from "@quid2/ts/ADT/Word8/Kb1f46a49c8f8";
import { $Word7, Word7 } from "@quid2/ts/ADT/Word7/Kf4c946334a7e";
// import { BLOB } from '@quid2/ts/ADT/BLOB/Kf139d4751fda'
// import { FlatEncoding } from '@quid2/ts/ADT/FlatEncoding/K982148c09ddb'
import {
  $NonEmptyList,
  NonEmptyList,
  Elem,
  Cons as NECons,
} from "@quid2/ts/ADT/NonEmptyList/Kbf2d1c86eb20";

//import {Array,A1,A0} from  '@quid2/ts/ADT/Array/K2e8b4519aeaa'
//import {Array} from  '@quid2/ts/ADT/Array/K2e8b4519aeaa'
//import { Tuple2 } from '@quid2/ts/ADT/Tuple2/Ka5583bf3ad34'
import { $Either } from "@quid2/ts/ADT/Either/K6260e465ae74";
import { $Maybe } from "@quid2/ts/ADT/Maybe/Kda6836778fd4";
import { $Bool, Bool, True, False } from "@quid2/ts/ADT/Bool/K306f1981b41c";
import { PreAligned } from "@quid2/ts/ADT/PreAligned/Kb2f28cf37d12";
//import { FillerEnd } from "@quid2/ts/ADT/Filler/Kae1dfeece189";
import { FlatEncoding } from "@quid2/ts/ADT/FlatEncoding/K982148c09ddb";
import {
  ChannelSelectionResult,
  $ChannelSelectionResult,
  RetryAt,
  Success,
} from "@quid2/ts/ADT/ChannelSelectionResult/Kc6627a317dbc";
import {
  $WebSocketAddress,
  WebSocketAddress,
} from "@quid2/ts/ADT/WebSocketAddress/Kc802c6aae1af";
import { $IP4Address, IP4Address } from "@quid2/ts/ADT/IP4Address/K6cb2ee3ac409";
import { $List, Cons, Nil } from "@quid2/ts/ADT/List/Kb8cd13187198";
import { $Array, Array as ZArray } from "@quid2/ts/ADT/Array/K2e8b4519aeaa";
import { $Bytes, Bytes } from "@quid2/ts/ADT/Bytes/Kf8844385a443";
import { $Tuple2, Tuple2 } from "@quid2/ts/ADT/Tuple2/Ka5583bf3ad34";
import { Word16, $Word16 } from "@quid2/ts/ADT/Word16/K295e24d62fac";
import { $Char, Char } from "@quid2/ts/ADT/Char/K066db52af145";
import { $String, String } from "@quid2/ts/ADT/String/K2f006595638c";
import * as tap from "tap";

function log(msg) {
  //console.log(msg);
}

function flatS(v: any, exp: any) {
  log("");
  log("Val:");
  log(v);
  log(v.toString());
  log("Max Size in Bits:");
  log(v.flatMaxSize());
  log("Flat:");
  log(flat(v).toString());
  log("Expected:");
  log(exp.toString());
  tap.equal(flat(v).toString(), exp.toString());
}

// Check roundabout
export function flatRound<A extends Flat>(typ: zmFold<A>, v: A) {
  log("");
  log("Val:");
  log(v);
  log(v.toString());
  log("Max Size in Bits:");
  log(v.flatMaxSize());
  log("Flat:");
  log(flat(v).toString());
  log("Unflat:");
  log(unflat(typ(flatDecoder), flat(v)));
}

function testFlat() {
  flatS(new Word8(233), [233, 1]);
  flatS(new Tuple2(new V1(), new V1()), [128 + 64 + 1]);
  flatS(new Tuple2(new V1(), new Word8(128 + 1)), [128 + 64, 128 + 1]);
  flatS(new Tuple2(new Word8(128 + 1), new V1()), [129, 128 + 1]);
  flatS($Either($Bool, $Maybe($Bool))(zmType), [
    204,
    76,
    28,
    140,
    181,
    206,
    131,
    6,
    241,
    152,
    27,
    65,
    203,
    105,
    160,
    217,
    222,
    63,
    80,
    96,
    222,
    51,
    3,
    104,
    57,
  ]);

  // flat $ typedBLOB(ByType::ByType Bool);
  // [161, 252, 36, 41, 83, 168, 198, 13, 227, 48, 54, 131, 129,       1,     1,        0,        1]
  // <TypCon (ByType Bool) + prealign                         >   arrayN, ByType arrayEnd postalign

  flatS(typedBLOB(new ByType(), $ByType($Bool)), [
    161,
    252,
    36,
    41,
    83,
    168,
    198,
    13,
    227,
    48,
    54,
    131,
    129,
    1,
    1,
    0,
    1,
  ]);
  flatS(typedBLOB(new ByType(), $ByType($Bit)), [
    161,
    252,
    36,
    41,
    83,
    168,
    204,
    162,
    147,
    156,
    118,
    108,
    193,
    1,
    1,
    0,
    1,
  ]);
  flatS(typedBLOB(new True(), $Bool), [
    24,
    55,
    140,
    192,
    218,
    14,
    1,
    1,
    129,
    0,
    1,
  ]);

  flatS(new Bytes(new Uint8Array([11, 22, 33])), [1, 3, 11, 22, 33, 0, 1]);
  flatS(new Bytes(new Uint8Array([])), [1, 0, 1]);

  flatS(new ZArray([new Word8(11), new Word8(22)]), [2, 11, 22, 0, 1]);

  flatRound($Bit, new V0());
  flatRound(
    $ChannelSelectionResult($WebSocketAddress($IP4Address)),
    new Success()
  );
  flatRound($List($Bit), new Cons(new V0(), new Cons(new V1(), new Nil())));
  flatRound($Array($Bit), new ZArray([new V0(), new V1(), new V0()]));
  flatRound($Bytes, new Bytes(new Uint8Array([11, 22, 33])));
  flatRound($Word7, new Word7(111));
  flatRound($Word16, new Word16(65535));
  flatRound($Tuple2($Bit, $Word8), new Tuple2(new V1(), new Word8(222)));
  flatRound($Tuple2($Bit, $Word7), new Tuple2(new V1(), new Word7(127)));
  flatRound($Tuple2($Bit, $Word16), new Tuple2(new V1(), new Word16(0)));
  flatRound($Tuple2($Bit, $Word16), new Tuple2(new V1(), new Word16(65535)));
  flatRound(
    $NonEmptyList($Bit),
    new NECons(new V0(), new NECons(new V1(), new Elem(new V0())))
  );
  flatRound($Char, new Char("a"));
  flatRound($String, new String("abc"));

  flatRound($Array($Word8), new ZArray([new Word8(11), new Word8(22)]));
}

testFlat();
