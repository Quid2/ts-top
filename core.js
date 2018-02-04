"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zmConst(v) { return function (f) { return v; }; }
exports.zmConst = zmConst;
function flatDecoder(t, decoders) {
    return t.decoder(decoders);
}
exports.flatDecoder = flatDecoder;
;
class DecoderState {
    constructor(buffer) {
        this.buffer = buffer;
        this.currPtr = 0;
        this.usedBits = 0;
    }
    byteArray() {
        if (this.usedBits != 0)
            throw Error("DecoderState.byteArray: Buffer is not byte aligned");
        var st = this;
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
    filler() {
        while (this.zero())
            ;
    }
    bits8(numBits) {
        if (numBits < 0 || numBits > 8)
            throw Error("Decoder.bits8: incorrect value of numBits " + numBits);
        this.ensureBits(numBits);
        const unusedBits = 8 - this.usedBits;
        const leadingZeros = 8 - numBits;
        var r = ((this.buffer[this.currPtr] << this.usedBits) & 255) >>> leadingZeros;
        if (numBits > unusedBits) {
            r |= (this.buffer[this.currPtr + 1] >>> (unusedBits + leadingZeros));
        }
        this.dropBits(numBits);
        return r;
    }
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
        if (this.usedBits == 7) {
            this.currPtr++;
            this.usedBits = 0;
        }
        else
            this.usedBits++;
        return b;
    }
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
function byteArraySize(arr) {
    let numBytes = arr.byteLength + arrayBlocks(arr.byteLength);
    return 8 * numBytes;
}
exports.byteArraySize = byteArraySize;
function arrayBlocks(len) { return Math.ceil(len / 255) + 1; }
exports.arrayBlocks = arrayBlocks;
function nestedPars(nested, s) { return nested ? "(" + s + ")" : s; }
exports.nestedPars = nestedPars;
//# sourceMappingURL=core.js.map