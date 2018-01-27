import {EncoderState,zmId,zmFold,zmTypeInfo,Decoder,DecoderState} from './core'
import {Tuple2} from  './ADT/Tuple2/Ka5583bf3ad34'
import {FillerEnd} from  './ADT/Filler/Kae1dfeece189'
import {Type,TypeApp,TypeCon} from  './ADT/Type/K7028aa556ebc'
import {AbsRef} from  './ADT/AbsRef/K4bbd38587b9e'
import {SHAKE128_48} from  './ADT/SHAKE128_48/K9f214799149b'
import {Word8 as W} from  './ADT/Word8/Kb1f46a49c8f8'

export {flat,zmType,zmId,zmFold,unflat,Decoder};

// Flat encode a value
//function flat(v:any implements Flat) {
function flat(v: any): Uint8Array {
        let val = new Tuple2(v, new FillerEnd());
        let numBits = val.flatMaxSize();
        var numBytes = Math.ceil(numBits / 8);
        let st = new EncoderState(numBytes);
        val.flatEncode(st);
        return st.seal();
}

// Apply to a type to create the corresponding ZM type
function zmType(t:zmTypeInfo ,ts:Type<AbsRef>[]) : Type<AbsRef> {
    
    function typeId(v: zmId): Type<AbsRef> {
        return new TypeCon(new AbsRef(new SHAKE128_48(new W(v[0]), new W(v[1]), new W(v[2]), new W(v[3]), new W(v[4]), new W(v[5]))))
    }

    return ts.reduce((f, a) => new TypeApp(f, a), typeId(t.zid));
};


function unflat(dec:Decoder,buf:Uint8Array) {
    //console.log("unflat",buf);
    const st = new DecoderState(buf);
    const v = dec(st);
    st.filler();
    st.seal();
    return v;
}

// Optimised Types

//String.prototype.
