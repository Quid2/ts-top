import { zmFold, ZM } from "./zm";
import { Promise } from "es6-promise";
import { Observable } from "rxjs";
import { Channel, Client } from "./top/socket";
import { QueueingSubject } from "queueing-subject";
export { Channel, Client, channel };
declare function channel<A>(t: zmFold<A>): [Observable<A>, QueueingSubject<A>];
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