import { zmFold } from "../zm";
export interface Client<A> {
    onOpen: (send: (v: A) => void, close: () => void) => void;
    onError: () => void;
    onValue: (v: A) => void;
}
export declare class Channel<A> {
    constructor(t: zmFold<A>, client: Client<A>);
}
//# sourceMappingURL=socket.d.ts.map