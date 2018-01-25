import * as Q from '../../core';
import * as K306f1981b41c from '../Bool/K306f1981b41c';
import * as Ke5d02571ce7b from '../SocketAddress/Ke5d02571ce7b';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K066db52af145 from '../Char/K066db52af145';
export declare const $WebSocketAddress: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<WebSocketAddress<A>>;
export declare class WebSocketAddress<A extends Q.Flat> implements Q.Flat {
    secure: K306f1981b41c.Bool;
    host: Ke5d02571ce7b.SocketAddress<A>;
    path: Kb8cd13187198.List<K066db52af145.Char>;
    constructor(secure: K306f1981b41c.Bool, host: Ke5d02571ce7b.SocketAddress<A>, path: Kb8cd13187198.List<K066db52af145.Char>);
    match<R>(m: {
        WebSocketAddress: (v0: K306f1981b41c.Bool, v1: Ke5d02571ce7b.SocketAddress<A>, v2: Kb8cd13187198.List<K066db52af145.Char>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
