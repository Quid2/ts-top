import {flat,zmType,typedBLOB} from '../index'
import { ByType, $ByType } from '../ADT/ByType/K87f090a54ea3'
import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'
// import { TypedBLOB } from '../ADT/TypedBLOB/K614edd84c8bd'
import { Word8 } from '../ADT/Word8/Kb1f46a49c8f8'
// import { BLOB } from '../ADT/BLOB/Kf139d4751fda'
// import { FlatEncoding } from '../ADT/FlatEncoding/K982148c09ddb'

//import {Array,A1,A0} from  '../ADT/Array/K2e8b4519aeaa'
//import {Array} from  '../ADT/Array/K2e8b4519aeaa'
import { Tuple2 } from '../ADT/Tuple2/Ka5583bf3ad34'
import { $Either } from '../ADT/Either/K6260e465ae74'
import { $Maybe } from '../ADT/Maybe/Kda6836778fd4'
import { $Bool, Bool,True } from '../ADT/Bool/K306f1981b41c'
import { PreAligned } from "../ADT/PreAligned/Kb2f28cf37d12";
import { FillerEnd } from "../ADT/Filler/Kae1dfeece189";
import { Bytes } from '../ADT/Bytes/Kf8844385a443'


function flatS(v: any, exp: any) {
    console.log("");
    console.log("Val:");
    console.debug(v);
    console.log("Max Size in Bits:");
    console.log(v.flatMaxSize());
    console.log("Flat:");
    console.log(flat(v).toString());
    console.log("Expected:");
    console.log(exp.toString());
}

function testFlat() {
    flatS(new Word8(233), [233, 1]);
    flatS(new Tuple2(new V1, new V1), [128 + 64 + 1]);
    flatS(new Tuple2(new V1, new Word8(128 + 1)), [128 + 64, 128 + 1]);
    flatS(new Tuple2(new Word8(128 + 1), new V1), [129, 128 + 1]);
    flatS($Either($Bool, $Maybe($Bool))(zmType), [204, 76, 28, 140, 181, 206, 131, 6, 241, 152, 27, 65, 203, 105, 160, 217, 222, 63, 80, 96, 222, 51, 3, 104, 57]);

    // flat $ typedBLOB(ByType::ByType Bool);
    // [161, 252, 36, 41, 83, 168, 198, 13, 227, 48, 54, 131, 129,       1,     1,        0,        1]
    // <TypCon (ByType Bool) + prealign                         >   arrayN, ByType arrayEnd postalign   

    flatS(typedBLOB(new ByType, $ByType($Bool)), [161, 252, 36, 41, 83, 168, 198, 13, 227, 48, 54, 131, 129, 1, 1, 0, 1]);

    flatS(typedBLOB(new ByType, $ByType($Bit)), [161, 252, 36, 41, 83, 168, 204, 162, 147, 156, 118, 108, 193, 1, 1, 0, 1]);

    flatS(typedBLOB(new True, $Bool), [24, 55, 140, 192, 218, 14, 1, 1, 129, 0, 1])


    flatS(new Bytes(new Uint8Array([11, 22, 33])), [1, 3, 11, 22, 33, 0, 1]);

    flatS(new Bytes(new Uint8Array([])), [1, 0, 1]);
}

testFlat();