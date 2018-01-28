import * as Q from '../../core';
import * as K0e1df25dc480 from '../User/K0e1df25dc480';
import * as Kfced5b0f3c1f from '../Subject/Kfced5b0f3c1f';
import * as K957357183935 from '../Content/K957357183935';
export declare const $Message: Q.zmFold<Message>;
export declare const ___: Q.zmTypeInfo;
export declare class Message implements Q.Flat {
    fromUser: K0e1df25dc480.User;
    subject: Kfced5b0f3c1f.Subject;
    content: K957357183935.Content<K0e1df25dc480.User, Message>;
    constructor(fromUser: K0e1df25dc480.User, subject: Kfced5b0f3c1f.Subject, content: K957357183935.Content<K0e1df25dc480.User, Message>);
    match<R>(m: {
        Message: (v0: K0e1df25dc480.User, v1: Kfced5b0f3c1f.Subject, v2: K957357183935.Content<K0e1df25dc480.User, Message>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
