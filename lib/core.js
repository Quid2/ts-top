"use strict";
/**
  Primitives required by the generated ADT definitions.
 */
exports.__esModule = true;
//export const zmConst : <A> (v:A) => ((f: (tId: zmTypeInfo,pars: A[]) => A) => A) = function (v) {return function(f) {return v;}} 
function zmConst(v) { return function (f) { return v; }; }
exports.zmConst = zmConst;
function flatDecoder(t, decoders) {
    return t.decoder(decoders);
}
exports.flatDecoder = flatDecoder;
;
var DecoderState = /** @class */ (function () {
    /**
     *
     * @param buffer The flat-encoded binary value
     */
    function DecoderState(buffer) {
        this.buffer = buffer;
        this.currPtr = 0;
        this.usedBits = 0;
    }
    DecoderState.prototype.zmBytes = function (decoders) { return this.byteArray(); };
    DecoderState.prototype.zmChar = function (decoders) { return String.fromCharCode(this.word()); };
    DecoderState.prototype.zmWord7 = function (decoders) { return this.bits8(7); };
    DecoderState.prototype.zmWord8 = function (decoders) { return this.bits8(8); };
    DecoderState.prototype.zmWord16 = function (decoders) { return this.word(); };
    DecoderState.prototype.zmWord32 = function (decoders) { return this.word(); };
    DecoderState.prototype.zmArray = function (decoders) {
        var dec = decoders[0];
        var arr = [];
        var blkLen;
        while (blkLen = this.bits8(8))
            for (var i = 0; i < blkLen; i++)
                arr.push(dec(this));
        //console.log(arr);
        return arr;
    };
    /** Decode a byteArray
     * @return the decoded byteArray
    */
    DecoderState.prototype.byteArray = function () {
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
    };
    /** Decode a Filler, a special value that is used to byte align values.
    */
    DecoderState.prototype.filler = function () {
        while (this.zero())
            ;
    };
    /** Decode up to 8 bits
     * @param numBits the number of bits to decode (0..8)
    */
    DecoderState.prototype.bits8 = function (numBits) {
        if (numBits < 0 || numBits > 8)
            throw Error("Decoder.bits8: incorrect value of numBits " + numBits);
        this.ensureBits(numBits);
        // usedBits=1 numBits=8 unusedBits=7 leadingZeros=0 unusedBits+leadingZeros=7
        var unusedBits = 8 - this.usedBits;
        var leadingZeros = 8 - numBits;
        var r = ((this.buffer[this.currPtr] << this.usedBits) & 255) >>> leadingZeros;
        if (numBits > unusedBits) {
            r |= (this.buffer[this.currPtr + 1] >>> (unusedBits + leadingZeros));
        }
        this.dropBits(numBits);
        return r;
    };
    /** Decode a ZM Word see definition at  */
    DecoderState.prototype.word = function () {
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
    };
    // char(): string {
    //   return String.fromCharCode(this.word());
    // }
    DecoderState.prototype.string = function () {
        var s = "";
        while (!this.zero()) {
            s += this.zmChar();
        }
        return s;
    };
    DecoderState.prototype.zero = function () {
        this.ensureBit();
        var b = !(this.buffer[this.currPtr] & (128 >>> this.usedBits));
        //console.log("BIT",this.buffer,this.currPtr,this.buffer[this.currPtr],128 >>> this.usedBits,(this.buffer[this.currPtr] & (128 >>> this.usedBits)),b);
        if (this.usedBits == 7) {
            this.currPtr++;
            this.usedBits = 0;
        }
        else
            this.usedBits++;
        return b;
    };
    // Is this required? Or we can rely on build in js checks?
    DecoderState.prototype.ensureBit = function () {
        if (this.currPtr >= this.buffer.byteLength) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.ensureBits = function (requiredBits) {
        if (requiredBits > this.availableBits()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.ensureBytes = function (requiredBytes) {
        if (requiredBytes > this.availableBytes()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.availableBits = function () { return 8 * this.availableBytes() - this.usedBits; };
    // Available bytes, ignoring used bits
    DecoderState.prototype.availableBytes = function () { return this.buffer.byteLength - this.currPtr; };
    DecoderState.prototype.dropBits = function (numBits) {
        var totUsed = numBits + this.usedBits;
        this.usedBits = totUsed % 8;
        this.currPtr += Math.floor(totUsed / 8);
    };
    DecoderState.prototype.seal = function () {
        if (this.availableBits() > 0) {
            throw Error("DecoderState: Unread data: " + JSON.stringify(this));
        }
        ;
    };
    return DecoderState;
}());
exports.DecoderState = DecoderState;
var EncoderState = /** @class */ (function () {
    function EncoderState(bufferSize) {
        this.buffer = new Uint8Array(bufferSize);
        this.nextPtr = 0;
        this.currentByte = 0;
        this.usedBits = 0;
    }
    EncoderState.prototype.zmBytes = function (v) { this.filler(); this.byteArray(v); };
    EncoderState.prototype.zmChar = function (v) { this.word(v.charCodeAt(0)); };
    EncoderState.prototype.zmWord7 = function (n) { this.bits(7, n); };
    EncoderState.prototype.zmWord8 = function (n) { this.bits(8, n); };
    EncoderState.prototype.zmWord16 = function (n) { this.word(n); };
    EncoderState.prototype.zmWord32 = function (n) { this.word(n); };
    EncoderState.szArray = function (vals) {
        var len = vals.length;
        var size = arrayBlocks(len) * 8;
        for (var i = 0; i < len; i++)
            size += vals[i].flatMaxSize();
        return size;
    };
    EncoderState.prototype.zmArray = function (vals) {
        //const vals = this.values;
        var numElems = vals.length;
        var inx = 0;
        var blkLen;
        while (blkLen = Math.min(255, numElems)) {
            this.bits(8, blkLen);
            for (var i = 0; i < blkLen; i++)
                vals[inx + i].flatEncode(this);
            numElems -= blkLen;
        }
        this.bits(8, 0);
    };
    EncoderState.prototype.filler = function () {
        this.currentByte |= 1;
        this.nextWord();
    };
    EncoderState.prototype.word = function (n) {
        do {
            var w = n & 127;
            n >>>= 7;
            if (n !== 0)
                w |= 128;
            this.bits(8, w);
        } while (n !== 0);
    };
    // char(c: string): void {
    //   this.word(c.charCodeAt(0));
    // }
    EncoderState.prototype.string = function (s) {
        var l = s.length;
        for (var i = 0; i < l; i++) {
            this.one();
            this.zmChar(s.charAt(i));
        }
        ;
        this.zero();
    };
    // add indicated number of bits (up to ? bits)
    EncoderState.prototype.bits = function (numBits, value) {
        this.usedBits += numBits;
        var unusedBits = 8 - this.usedBits;
        if (unusedBits > 0)
            this.currentByte |= value << unusedBits;
        else if (unusedBits == 0) {
            this.currentByte |= value;
            this.nextWord();
        }
        else {
            var used = -unusedBits;
            this.currentByte |= value >>> used;
            this.nextWord();
            this.currentByte = value << (8 - used);
            this.usedBits = used;
        }
        ;
    };
    EncoderState.prototype.zero = function () { this.usedBits == 7 ? this.nextWord() : this.usedBits++; };
    EncoderState.prototype.one = function () {
        if (this.usedBits == 7) {
            this.currentByte |= 1;
            this.nextWord();
        }
        else {
            this.currentByte |= (1 << 7 - this.usedBits);
            this.usedBits++;
        }
    };
    // string(s) : void {
    //   let ptr = 0;
    //   let blkLen = Math.min(s.length-ptr, 255);
    //   bits8(blkLen)
    //   for (var i=0;i<blkLen)
    // }
    EncoderState.prototype.byteArray = function (arr) {
        if (this.usedBits != 0)
            throw Error("EncoderState.byteArray: Buffer is not byte aligned");
        var st = this;
        function writeBlk(srcPtr) {
            var srcLen = arr.byteLength - srcPtr;
            var blkLen = Math.min(srcLen, 255);
            st.buffer[st.nextPtr++] = blkLen;
            if (blkLen == 0)
                return;
            st.buffer.set(arr.subarray(srcPtr, srcPtr + blkLen), st.nextPtr);
            st.nextPtr += blkLen;
            srcPtr += blkLen;
            writeBlk(srcPtr);
        }
        writeBlk(0);
    };
    EncoderState.prototype.nextWord = function () { this.buffer[this.nextPtr++] = this.currentByte; this.currentByte = 0, this.usedBits = 0; };
    EncoderState.prototype.seal = function () {
        if (this.usedBits != 0) {
            throw Error("EncoderState.seal: Byte partially filled: " + JSON.stringify(this));
        }
        ;
        return this.buffer.subarray(0, this.nextPtr);
    };
    // Up to 8 bits for prefiller plus aligned byte array size;
    EncoderState.szBytes = function (v) { return 8 + byteArraySize(v); };
    EncoderState.szChar = function (v) { return 24; };
    EncoderState.szWord7 = function (n) { return 7; };
    EncoderState.szWord8 = function (n) { return 8; };
    EncoderState.szWord16 = function (n) { return 24; };
    EncoderState.szWord32 = function (n) { return 40; };
    return EncoderState;
}());
exports.EncoderState = EncoderState;
// Exact encoding size in bits of a prealigned Array of bytes
function byteArraySize(arr) {
    var numBytes = arr.byteLength + arrayBlocks(arr.byteLength);
    return 8 * numBytes;
}
exports.byteArraySize = byteArraySize;
// Exact number of bytes needed to store the array blocks lengths
function arrayBlocks(len) { return Math.ceil(len / 255) + 1; }
exports.arrayBlocks = arrayBlocks;
function nestedPars(nested, s) { return nested ? "(" + s + ")" : s; }
exports.nestedPars = nestedPars;
