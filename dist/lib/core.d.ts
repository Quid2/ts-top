export declare type zmFold<T> = <A>(f: (tId: zmTypeInfo, pars: A[]) => A) => A;
export declare type zmId = [number, number, number, number, number, number];
export declare type zmTypeInfo = {
    zid: zmId;
    decoder: (decoders: Decoder[]) => Decoder;
};
export interface Flat {
    flatMaxSize: () => number;
    flatEncode: Encoder;
}
export declare type Decoder = (s: DecoderState) => any;
export declare class DecoderState {
    buffer: Uint8Array;
    currPtr: number;
    usedBits: number;
    constructor(buffer: Uint8Array);
    byteArray(): Uint8Array;
    filler(): void;
    bits8(numBits: number): number;
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
    filler(): void;
    bits(numBits: number, value: number): void;
    zero(): void;
    one(): void;
    byteArray(arr: Uint8Array): void;
    nextWord(): void;
    seal(): Uint8Array;
}
export declare function byteArraySize(arr: Uint8Array): number;
export declare function arrayBlocks(len: number): number;
