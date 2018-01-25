import * as Q from '../../core';
import * as K64f93d94a73d from '../HostAddress/K64f93d94a73d';
import * as K0ab5ac6303b9 from '../HostPort/K0ab5ac6303b9';
export declare const $SocketAddress: <A extends Q.Flat>(t0: Q.zmFold<A>) => Q.zmFold<SocketAddress<A>>;
export declare class SocketAddress<A extends Q.Flat> implements Q.Flat {
    socketAddress: K64f93d94a73d.HostAddress<A>;
    socketPort: K0ab5ac6303b9.HostPort;
    constructor(socketAddress: K64f93d94a73d.HostAddress<A>, socketPort: K0ab5ac6303b9.HostPort);
    match<R>(m: {
        SocketAddress: (v0: K64f93d94a73d.HostAddress<A>, v1: K0ab5ac6303b9.HostPort) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
