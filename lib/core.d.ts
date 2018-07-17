/**
  Primitives required by the generated ADT definitions.
 */
/** Saturated ZM Type Fold */
export declare type zmFold<T> = <A>(f: (tId: zmTypeInfo, pars: A[]) => A) => A;
export declare function zmConst(v: any): (f: any) => any;
export declare type zmId = [number, number, number, number, number, number];
export declare type zmTypeInfo = {
    zid: zmId;
    decoder: (decoders: Decoder[]) => Decoder;
};
/** Flat binary encoding **/
export interface Flat {
    flatMaxSize: () => number;
    flatEncode: Encoder;
}
export interface AsString {
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
}
export interface ZM extends Flat, AsString {
}
export declare type Decoder = (s: DecoderState) => any;
export declare function flatDecoder(t: zmTypeInfo, decoders: Decoder[]): Decoder;
export declare class DecoderState {
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
    constructor(buffer: Uint8Array);
    /** Decode a Filler, a special value that is used to byte align values.
      */
    zmFiller(decoders?: Decoder[]): string;
    zmBytes(decoders?: Decoder[]): Uint8Array;
    zmChar(decoders?: Decoder[]): string;
    zmString(decoders?: Decoder[]): string;
    zmWord7(decoders?: Decoder[]): number;
    zmWord8(decoders?: Decoder[]): number;
    zmWord16(decoders?: Decoder[]): number;
    zmWord32(decoders?: Decoder[]): number;
    zmArray(decoders: Decoder[]): any[];
    /** Decode a byteArray
     * @return the decoded byteArray
    */
    byteArray(): Uint8Array;
    /** Decode up to 8 bits
     * @param numBits the number of bits to decode (0..8)
    */
    bits8(numBits: number): number;
    /** Decode a ZM Word see definition at  */
    word(): number;
    zero(): boolean;
    ensureBit(): void;
    ensureBits(requiredBits: number): void;
    ensureBytes(requiredBytes: number): void;
    availableBits(): number;
    availableBytes(): number;
    dropBits(numBits: number): void;
    seal(): void;
}
export declare type Encoder = (s: EncoderState) => void;
export declare class EncoderState {
    buffer: Uint8Array;
    nextPtr: number;
    usedBits: number;
    currentByte: number;
    constructor(bufferSize: number);
    static szFiller: (v?: string | undefined) => number;
    static szBytes: (v: Uint8Array) => number;
    zmBytes(v: Uint8Array): void;
    static szChar: (v?: string | undefined) => number;
    zmChar(v: string): void;
    static szString: (v: string) => number;
    zmString(s: string): void;
    static szWord7: (n: number) => number;
    zmWord7(n: number): void;
    static szWord8: (n: number) => number;
    zmWord8(n: number): void;
    static szWord16: (n: number) => number;
    zmWord16(n: number): void;
    static szWord32: (n: number) => number;
    zmWord32(n: number): void;
    static szArray<A extends Flat>(vals: A[]): number;
    zmArray<A extends Flat>(vals: A[]): void;
    zmFiller(v?: string): void;
    word(n: number): void;
    bits(numBits: number, value: number): void;
    zero(): void;
    one(): void;
    byteArray(arr: Uint8Array): void;
    nextWord(): void;
    seal(): Uint8Array;
}
export declare function byteArraySize(arr: Uint8Array): number;
export declare function arrayBlocks(len: number): number;
export declare function nestedPars(nested: boolean, s: string): string;
