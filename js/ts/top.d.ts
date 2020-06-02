import { Promise } from "es6-promise";
import { Observable } from "rxjs";
import { zmFold, ZM } from "./api";
import { TypedBLOB } from "../ADT/TypedBLOB/K614edd84c8bd";
import { BLOB } from "../ADT/BLOB/Kf139d4751fda";
import { FlatEncoding } from "../ADT/FlatEncoding/K982148c09ddb";
import { QueueingSubject } from "queueing-subject";
export declare function flatBLOB(v: any): BLOB<FlatEncoding>;
export declare function typedBLOB(v: any, t: zmFold<any>): TypedBLOB;
export interface Client<A> {
    onOpen: (send: (v: A) => void, close: () => void) => void;
    onError: () => void;
    onValue: (v: A) => void;
}
export declare class Channel<A> {
    constructor(t: zmFold<A>, client: Client<A>);
}
export declare function channel<A>(t: zmFold<A>): [Observable<A>, QueueingSubject<A>];
export declare class CallChannel<I extends ZM, R extends ZM> {
    private inChan;
    private outChan;
    private timeoutInMs;
    private calls;
    constructor(inType: zmFold<I>, outType: zmFold<R>, ms?: number);
    /** Call remote function
     * @param val the remote function parameter
     * @return a Promise of the remote function's result
     */
    call(val: I): Promise<R>;
}
//# sourceMappingURL=top.d.ts.map