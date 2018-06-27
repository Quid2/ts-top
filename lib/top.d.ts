import { zmFold, Flat } from "./api";
import { TypedBLOB } from '../ADT/TypedBLOB/K614edd84c8bd';
import { BLOB } from '../ADT/BLOB/Kf139d4751fda';
import { FlatEncoding } from '../ADT/FlatEncoding/K982148c09ddb';
import { QueueingSubject } from 'queueing-subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/filter';
export declare const promiseTimeout: <A>(ms: Number, promise: Promise<A>) => Promise<{} | A>;
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
export declare class CallChannel<I extends Flat, R extends Flat> {
    private inChan;
    private outChan;
    private timeoutInMs;
    private calls;
    constructor(inType: zmFold<I>, outType: zmFold<R>, ms?: number);
    /** Call remote function
     * @param val the remote function parameter
     * @return a Promise of
    */
    call(val: I): Promise<{} | {}>;
}