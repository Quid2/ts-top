/**
  Primitives required by the generated ADT definitions.
 */

// ZM types

/** Saturated ZM Type Fold */
export type zmFold<T> = <A> (f: (tId: zmTypeInfo, pars: A[]) => A) => A

//export const zmConst : <A> (v:A) => ((f: (tId: zmTypeInfo,pars: A[]) => A) => A) = function (v) {return function(f) {return v;}} 

export function zmConst(v: any) { return function (f: any) { return v; } }

//export const zmConst : string = ""

//export type zmFold0<T> = <A> (v:A) => zmFold<T>
//export const zmConst : zmFold0<T> = function (v) {return function(f) {return v;}} 
//export const zmConst : zmFold0<T> = function (v) {return function(f) {return v;}} 

//export type zmFold0 = <A> (v:A) => ((f: (tId: zmTypeInfo,pars: A[]) => A) => A)
//export const zmConst : zmFold0 = function (v) {return function(f) {return v;}} 

// ZM type constructor unique code
export type zmId = [number, number, number, number, number, number]

export type zmTypeInfo = { zid: zmId, decoder: (decoders: Decoder[]) => Decoder }

/** Flat binary encoding **/
export interface Flat {
  flatMaxSize: () => number,
  flatEncode: Encoder,

}

export interface AsString {
  toStr(nested?: boolean): string

    , pretty(nested?: boolean): string
}

export interface ZM extends Flat, AsString {

}

//export type Decoder<T> = (s:DecoderState) => T

export type Decoder = (s: DecoderState) => any

export function flatDecoder(t: zmTypeInfo, decoders: Decoder[]) {
  return t.decoder(decoders);
};

export class DecoderState {
  /** The buffer that contains a sequence of flat-encoded values */
  buffer: Uint8Array;

  /** Pointer to the current byte being decoded (0..buffer.byteLength-1) */
  currPtr: number;

  /** Number of already decoded bits in the current byte (0..7) */
  usedBits: number;

  /**
   * 
   * @param buffer The flat-encoded binary value
   */
  constructor(buffer: Uint8Array) {
    this.buffer = buffer;
    this.currPtr = 0;
    this.usedBits = 0;
  }

  zmBytes(decoders?: Decoder[]): Uint8Array { this.filler(); return this.byteArray(); }

  zmChar(decoders?: Decoder[]): string { return String.fromCharCode(this.word()); }

  zmWord7(decoders?: Decoder[]): number { return this.bits8(7); }

  zmWord8(decoders?: Decoder[]): number { return this.bits8(8); }

  zmWord16(decoders?: Decoder[]): number { return this.word(); }

  zmWord32(decoders?: Decoder[]): number { return this.word(); }

  zmArray(decoders: Decoder[]) {
    const dec = decoders[0];
    var arr = [];
    var blkLen;
    while (blkLen = this.bits8(8))
      for (var i = 0; i < blkLen; i++) arr.push(dec(this));
    //console.log(arr);
    return arr;
  }

  /** Decode a byteArray
   * @return the decoded byteArray
  */
  byteArray(): Uint8Array {
    if (this.usedBits != 0) throw Error("DecoderState.byteArray: Buffer is not byte aligned");

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
  filler(): void {
    while (this.zero());
  }

  /** Decode up to 8 bits 
   * @param numBits the number of bits to decode (0..8)
  */
  bits8(numBits: number): number {
    if (numBits < 0 || numBits > 8) throw Error("Decoder.bits8: incorrect value of numBits " + numBits);

    this.ensureBits(numBits);
    // usedBits=1 numBits=8 unusedBits=7 leadingZeros=0 unusedBits+leadingZeros=7
    const unusedBits = 8 - this.usedBits;
    const leadingZeros = 8 - numBits;
    var r = ((this.buffer[this.currPtr] << this.usedBits) & 255) >>> leadingZeros;

    if (numBits > unusedBits) { r |= (this.buffer[this.currPtr + 1] >>> (unusedBits + leadingZeros)) }

    this.dropBits(numBits);

    return r;
  }

  /** Decode a ZM Word see definition at  */
  word(): number {
    var n = 0;
    var shl = 0;
    var w8;
    var w7;

    do {
      w8 = this.bits8(8)
      w7 = w8 & 127
      n |= w7 << shl
      shl += 7
      //console.log("usedBits",this.usedBits,"w7",w7,"w8",w8,w8!==w7)
    } while (w8 !== w7);

    return n;
  }

  // char(): string {
  //   return String.fromCharCode(this.word());
  // }

  string(): string {
    var s = "";
    while (!this.zero()) {
      s += this.zmChar();
    }
    return s;
  }

  zero(): boolean {
    this.ensureBit();
    const b = !(this.buffer[this.currPtr] & (128 >>> this.usedBits));
    //console.log("BIT",this.buffer,this.currPtr,this.buffer[this.currPtr],128 >>> this.usedBits,(this.buffer[this.currPtr] & (128 >>> this.usedBits)),b);
    if (this.usedBits == 7) { this.currPtr++; this.usedBits = 0; }
    else this.usedBits++;
    return b;
  }

  // Is this required? Or we can rely on build in js checks?
  ensureBit(): void {
    if (this.currPtr >= this.buffer.byteLength) { throw Error("DecoderState: Not enough data available: " + JSON.stringify(this)) };
  }

  ensureBits(requiredBits: number): void {
    if (requiredBits > this.availableBits()) { throw Error("DecoderState: Not enough data available: " + JSON.stringify(this)) };
  }

  ensureBytes(requiredBytes: number): void {
    if (requiredBytes > this.availableBytes()) { throw Error("DecoderState: Not enough data available: " + JSON.stringify(this)) };
  }

  availableBits(): number { return 8 * this.availableBytes() - this.usedBits; }

  // Available bytes, ignoring used bits
  availableBytes(): number { return this.buffer.byteLength - this.currPtr; }

  dropBits(numBits: number): void {
    const totUsed = numBits + this.usedBits;
    this.usedBits = totUsed % 8;
    this.currPtr += Math.floor(totUsed / 8);
  }

  seal(): void {
    if (this.availableBits() > 0) { throw Error("DecoderState: Unread data: " + JSON.stringify(this)) };
  }
}

export type Encoder = (s: EncoderState) => void

export class EncoderState {
  buffer: Uint8Array;
  nextPtr: number;
  usedBits: number;
  currentByte: number;

  constructor(bufferSize: number) {
    this.buffer = new Uint8Array(bufferSize);
    this.nextPtr = 0;
    this.currentByte = 0;
    this.usedBits = 0;
  }

  // Up to 8 bits for prefiller plus aligned byte array size;
  static szBytes = (v: Uint8Array) => 8 + byteArraySize(v);
  zmBytes(v: Uint8Array): void { this.filler(); this.byteArray(v); }

  static szChar = (v?: string) => 24;
  zmChar(v: string): void { this.word(v.charCodeAt(0)); }

  static szWord7 = (n: number) => 7;
  zmWord7(n: number): void { this.bits(7, n); }

  static szWord8 = (n: number) => 8;
  zmWord8(n: number): void { this.bits(8, n); }

  static szWord16 = (n: number) => 24;
  zmWord16(n: number): void { this.word(n) }

  static szWord32 = (n: number) => 40;
  zmWord32(n: number): void { this.word(n) }

  static szArray<A extends Flat>(vals: A[]) {
    const len = vals.length;
    var size = arrayBlocks(len) * 8;
    for (var i = 0; i < len; i++) size += vals[i].flatMaxSize();
    return size;
  }

  zmArray<A extends Flat>(vals: A[]) {
    //const vals = this.values;
    var numElems = vals.length;
    var inx = 0;
    var blkLen;

    while (blkLen = Math.min(255, numElems)) {
      this.bits(8, blkLen);
      for (var i = 0; i < blkLen; i++) vals[inx + i].flatEncode(this);
      numElems -= blkLen;
    }
    this.bits(8, 0);
  }

  filler(): void {
    this.currentByte |= 1;
    this.nextWord();
  }

  word(n: number): void {
    do {
      var w = n & 127;
      n >>>= 7;
      if (n !== 0) w |= 128;
      this.bits(8, w);
    } while (n !== 0);
  }

  // char(c: string): void {
  //   this.word(c.charCodeAt(0));
  // }

  string(s: string): void {
    const l = s.length;

    for (var i = 0; i < l; i++) {
      this.one();
      this.zmChar(s.charAt(i));
    };

    this.zero();
  }

  // add indicated number of bits (up to ? bits)
  bits(numBits: number, value: number): void {
    this.usedBits += numBits;
    let unusedBits = 8 - this.usedBits;
    if (unusedBits > 0)
      this.currentByte |= value << unusedBits;
    else if (unusedBits == 0) { this.currentByte |= value; this.nextWord(); }
    else {
      let used = -unusedBits;
      this.currentByte |= value >>> used;
      this.nextWord();
      this.currentByte = value << (8 - used);
      this.usedBits = used;
    };
  }

  zero(): void { this.usedBits == 7 ? this.nextWord() : this.usedBits++; }

  one(): void {
    if (this.usedBits == 7) {
      this.currentByte |= 1;
      this.nextWord();
    } else {
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

  byteArray(arr: Uint8Array): void {
    if (this.usedBits != 0) throw Error("EncoderState.byteArray: Buffer is not byte aligned");

    var st = this;

    function writeBlk(srcPtr: number): void {
      let srcLen = arr.byteLength - srcPtr;
      let blkLen = Math.min(srcLen, 255);
      st.buffer[st.nextPtr++] = blkLen;
      if (blkLen == 0) return;

      st.buffer.set(arr.subarray(srcPtr, srcPtr + blkLen), st.nextPtr);
      st.nextPtr += blkLen;
      srcPtr += blkLen;
      writeBlk(srcPtr);
    }

    writeBlk(0);
  }

  nextWord(): void { this.buffer[this.nextPtr++] = this.currentByte; this.currentByte = 0, this.usedBits = 0; }

  seal(): Uint8Array {
    if (this.usedBits != 0) { throw Error("EncoderState.seal: Byte partially filled: " + JSON.stringify(this)) };
    return this.buffer.subarray(0, this.nextPtr);
  }

}

// Exact encoding size in bits of a prealigned Array of bytes
export function byteArraySize(arr: Uint8Array): number {
  let numBytes = arr.byteLength + arrayBlocks(arr.byteLength);
  return 8 * numBytes;
}

// Exact number of bytes needed to store the array blocks lengths
export function arrayBlocks(len: number): number { return Math.ceil(len / 255) + 1; }

export function nestedPars(nested: boolean, s: string): string { return nested ? "(" + s + ")" : s }


