"use strict";
/**
  Primitives required by the generated ADT definitions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//export const zmConst : <A> (v:A) => ((f: (tId: zmTypeInfo,pars: A[]) => A) => A) = function (v) {return function(f) {return v;}} 
function zmConst(v) { return function (f) { return v; }; }
exports.zmConst = zmConst;
function flatDecoder(t, decoders) {
    return t.decoder(decoders);
}
exports.flatDecoder = flatDecoder;
;
class DecoderState {
    /**
     *
     * @param buffer The flat-encoded binary value
     */
    constructor(buffer) {
        this.buffer = buffer;
        this.currPtr = 0;
        this.usedBits = 0;
    }
    /** Decode a byteArray
     * @return the decoded byteArray
    */
    byteArray() {
        if (this.usedBits != 0)
            throw Error("DecoderState.byteArray: Buffer is not byte aligned");
        var st = this;
        // const arr = new Uint8Array(1000);
        // while (blkLen=st.buffer[st.currPtr++]) {
        //   arr.set(st.buffer.subarray(0,blkLen), arrPtr);
        //   arrPtr += blkLen;
        //   st.currPtr += blkLen;
        // }
        var arrPtr = st.currPtr;
        var arrSize = 0;
        var blkLen;
        st.ensureBytes(1);
        while (blkLen = st.buffer[st.currPtr++]) {
            st.ensureBytes(blkLen + 1);
            st.buffer.copyWithin(st.currPtr - 1, st.currPtr, st.currPtr + blkLen);
            st.currPtr += blkLen;
            arrSize += blkLen;
        }
        return st.buffer.subarray(arrPtr, arrPtr + arrSize);
    }
    /** Decode a Filler, a special value that is used to byte align values.
    */
    filler() {
        while (this.zero())
            ;
    }
    /** Decode up to 8 bits
     * @param numBits the number of bits to decode (0..8)
    */
    bits8(numBits) {
        if (numBits < 0 || numBits > 8)
            throw Error("Decoder.bits8: incorrect value of numBits " + numBits);
        this.ensureBits(numBits);
        // usedBits=1 numBits=8 unusedBits=7 leadingZeros=0 unusedBits+leadingZeros=7
        const unusedBits = 8 - this.usedBits;
        const leadingZeros = 8 - numBits;
        var r = ((this.buffer[this.currPtr] << this.usedBits) & 255) >>> leadingZeros;
        if (numBits > unusedBits) {
            r |= (this.buffer[this.currPtr + 1] >>> (unusedBits + leadingZeros));
        }
        this.dropBits(numBits);
        return r;
    }
    /** Decode a ZM Word see definition at  */
    word() {
        var n = 0;
        var shl = 0;
        var w8;
        var w7;
        do {
            w8 = this.bits8(8);
            w7 = w8 & 127;
            n |= w7 << shl;
            shl += 7;
            //console.log("usedBits",this.usedBits,"w7",w7,"w8",w8,w8!==w7)
        } while (w8 !== w7);
        return n;
    }
    char() {
        return String.fromCharCode(this.word());
    }
    string() {
        var s = "";
        while (!this.zero()) {
            s += this.char();
        }
        return s;
    }
    zero() {
        this.ensureBit();
        const b = !(this.buffer[this.currPtr] & (128 >>> this.usedBits));
        //console.log("BIT",this.buffer,this.currPtr,this.buffer[this.currPtr],128 >>> this.usedBits,(this.buffer[this.currPtr] & (128 >>> this.usedBits)),b);
        if (this.usedBits == 7) {
            this.currPtr++;
            this.usedBits = 0;
        }
        else
            this.usedBits++;
        return b;
    }
    // Is this required? Or we can rely on build in js checks?
    ensureBit() {
        if (this.currPtr >= this.buffer.byteLength) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    }
    ensureBits(requiredBits) {
        if (requiredBits > this.availableBits()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    }
    ensureBytes(requiredBytes) {
        if (requiredBytes > this.availableBytes()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    }
    availableBits() { return 8 * this.availableBytes() - this.usedBits; }
    // Available bytes, ignoring used bits
    availableBytes() { return this.buffer.byteLength - this.currPtr; }
    dropBits(numBits) {
        const totUsed = numBits + this.usedBits;
        this.usedBits = totUsed % 8;
        this.currPtr += Math.floor(totUsed / 8);
    }
    seal() {
        if (this.availableBits() > 0) {
            throw Error("DecoderState: Unread data: " + JSON.stringify(this));
        }
        ;
    }
}
exports.DecoderState = DecoderState;
class EncoderState {
    constructor(bufferSize) {
        this.buffer = new Uint8Array(bufferSize);
        this.nextPtr = 0;
        this.currentByte = 0;
        this.usedBits = 0;
    }
    filler() {
        this.currentByte |= 1;
        this.nextWord();
    }
    word(n) {
        do {
            var w = n & 127;
            n >>>= 7;
            if (n !== 0)
                w |= 128;
            this.bits(8, w);
        } while (n !== 0);
    }
    char(c) {
        this.word(c.charCodeAt(0));
    }
    string(s) {
        const l = s.length;
        for (var i = 0; i < l; i++) {
            this.one();
            this.char(s.charAt(i));
        }
        ;
        this.zero();
    }
    // add indicated number of bits (up to ? bits)
    bits(numBits, value) {
        this.usedBits += numBits;
        let unusedBits = 8 - this.usedBits;
        if (unusedBits > 0)
            this.currentByte |= value << unusedBits;
        else if (unusedBits == 0) {
            this.currentByte |= value;
            this.nextWord();
        }
        else {
            let used = -unusedBits;
            this.currentByte |= value >>> used;
            this.nextWord();
            this.currentByte = value << (8 - used);
            this.usedBits = used;
        }
        ;
    }
    zero() { this.usedBits == 7 ? this.nextWord() : this.usedBits++; }
    one() {
        if (this.usedBits == 7) {
            this.currentByte |= 1;
            this.nextWord();
        }
        else {
            this.currentByte |= (1 << 7 - this.usedBits);
            this.usedBits++;
        }
    }
    // string(s) : void {
    //   let ptr = 0;
    //   let blkLen = Math.min(s.length-ptr, 255);
    //   bits8(blkLen)
    //   for (var i=0;i<blkLen)
    // }
    byteArray(arr) {
        if (this.usedBits != 0)
            throw Error("EncoderState.byteArray: Buffer is not byte aligned");
        var st = this;
        function writeBlk(srcPtr) {
            let srcLen = arr.byteLength - srcPtr;
            let blkLen = Math.min(srcLen, 255);
            st.buffer[st.nextPtr++] = blkLen;
            if (blkLen == 0)
                return;
            st.buffer.set(arr.subarray(srcPtr, srcPtr + blkLen), st.nextPtr);
            st.nextPtr += blkLen;
            srcPtr += blkLen;
            writeBlk(srcPtr);
        }
        writeBlk(0);
    }
    nextWord() { this.buffer[this.nextPtr++] = this.currentByte; this.currentByte = 0, this.usedBits = 0; }
    seal() {
        if (this.usedBits != 0) {
            throw Error("EncoderState.seal: Byte partially filled: " + JSON.stringify(this));
        }
        ;
        return this.buffer.subarray(0, this.nextPtr);
    }
}
exports.EncoderState = EncoderState;
// Exact encoding size in bits of a prealigned Array of bytes
function byteArraySize(arr) {
    let numBytes = arr.byteLength + arrayBlocks(arr.byteLength);
    return 8 * numBytes;
}
exports.byteArraySize = byteArraySize;
// Exact number of bytes needed to store the array blocks lengths
function arrayBlocks(len) { return Math.ceil(len / 255) + 1; }
exports.arrayBlocks = arrayBlocks;
function nestedPars(nested, s) { return nested ? "(" + s + ")" : s; }
exports.nestedPars = nestedPars;
//# sourceMappingURL=core.js.map