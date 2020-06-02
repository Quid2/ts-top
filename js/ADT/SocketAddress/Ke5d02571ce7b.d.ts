/** ZM Type:
SocketAddress a ≡   SocketAddress {socketAddress :: K64f93d94a73d a,
                                   socketPort :: K0ab5ac6303b9}
*/
import * as Q from "@quid2/ts-core";
import * as K64f93d94a73d from "../HostAddress/K64f93d94a73d";
import * as K0ab5ac6303b9 from "../HostPort/K0ab5ac6303b9";
export declare const $SocketAddress: <A extends Q.ZM>(t0: Q.zmFold<A>) => Q.zmFold<SocketAddress<A>>;
export declare const ___: Q.zmTypeInfo;
export declare class SocketAddress<A extends Q.ZM> implements Q.ZM {
    readonly socketAddress: K64f93d94a73d.HostAddress<A>;
    readonly socketPort: K0ab5ac6303b9.HostPort;
    constructor(socketAddress: K64f93d94a73d.HostAddress<A>, socketPort: K0ab5ac6303b9.HostPort);
    toString(): string;
    toStr(nested?: boolean): string;
    pretty(nested?: boolean): string;
    match<R>(m: {
        SocketAddress: (v0: K64f93d94a73d.HostAddress<A>, v1: K0ab5ac6303b9.HostPort) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
//# sourceMappingURL=Ke5d02571ce7b.d.ts.map