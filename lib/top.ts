
import { Promise } from 'es6-promise'
import { map, filter, share } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Unsubscribable as AnonymousSubscription } from 'rxjs';
import { flat, zmType, zmFold, flatDecoder, unflat, ZM } from "./api";
//import {arraySize,zmId} from "./core";
//import { Promise } from 'es6-promise';

import { ByType, $ByType } from '../ADT/ByType/K87f090a54ea3'
//import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'
import { TypedBLOB } from '../ADT/TypedBLOB/K614edd84c8bd'
import { Word8 } from '../ADT/Word8/Kb1f46a49c8f8'
import { BLOB } from '../ADT/BLOB/Kf139d4751fda'
import { FlatEncoding } from '../ADT/FlatEncoding/K982148c09ddb'

//import {Array,A1,A0} from  '../ADT/Array/K2e8b4519aeaa'
//import {Array} from  '../ADT/Array/K2e8b4519aeaa'
import { Tuple2 } from '../ADT/Tuple2/Ka5583bf3ad34'
import { $Either } from '../ADT/Either/K6260e465ae74'
import { $Maybe } from '../ADT/Maybe/Kda6836778fd4'
import { $Bool, Bool, True } from '../ADT/Bool/K306f1981b41c'
import { PreAligned } from "../ADT/PreAligned/Kb2f28cf37d12";
//import { FillerEnd } from "../ADT/Filler/Kae1dfeece189";
import { Bytes } from '../ADT/Bytes/Kf8844385a443'
import { ChannelSelectionResult, $ChannelSelectionResult, RetryAt } from '../ADT/ChannelSelectionResult/Kc6627a317dbc'
import { $WebSocketAddress, WebSocketAddress } from '../ADT/WebSocketAddress/Kc802c6aae1af'
import { $IP4Address, IP4Address } from '../ADT/IP4Address/K6cb2ee3ac409'
import { $Function, Call, Reply, Function as ZMFunction } from '../ADT/Function/K2396c227c787'

import { $SourceCode, SourceCode } from '../ADT/SourceCode/Kb9b08d43766f'
import { $String, String } from '../ADT/String/K2f006595638c'
//import {$Issues,Issues} from  '../ADT/Issues/Kd0790379c631'
import { $Validate, Validate } from '../ADT/Validate/Kffe0940f8ff2'
import { $Position, Position } from '../ADT/Position/K2ff00417fe9d'
import { $Range, Range } from '../ADT/Range/K63b2d97244bc'
import { $ZM, ZM as ZML } from '../ADT/ZM/Kb3a40bdda26f'
import { $List, List as ZList } from '../ADT/List/Kb8cd13187198'
import { $Note, Note } from '../ADT/Note/K21b7bfc3d09c'

import { QueueingSubject } from 'queueing-subject'
import { assert } from "chai";
//import "chai-as-promised" as CAP;
//chai.use(chaiAsPromised);
import { shake128, shake_128 } from 'js-sha3';
import { isUndefined } from "util";
import { } from "./pretty"
//import { prettyShake48 } from "./util"

// https://italonascimento.github.io/applying-a-timeout-to-your-promises/
export const promiseTimeout = function <A>(ms: Number, promise: Promise<A>): Promise<{} | A> {

    // Create a promise that rejects in <ms> milliseconds
    let timeout = new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.')
        }, ms)
    })

    // Returns a race between our timeout and the passed in promise
    return Promise.race([
        promise,
        timeout
    ])
}

export const promiseWithTimeout = function <A>(ms: Number, f: (resolve: (value: A) => void, reject: (reason?: any) => void) => void): Promise<A> {

    // Create a promise that rejects in <ms> milliseconds
    return new Promise((resolve, reject) => {

        let id = setTimeout(() => {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.')
        }, ms)

        f(resolve, reject);
    })

}


export function flatBLOB(v: any): BLOB<FlatEncoding> {
    //return new BLOB(new FlatEncoding,new Bytes(new PreAligned(new FillerEnd(),flat (new ByType))));
    return new BLOB(new FlatEncoding, new Bytes(flat(v)));
}

export function typedBLOB(v: any, t: zmFold<any>): TypedBLOB {
    return new TypedBLOB(t(zmType), flatBLOB(v));
}

export interface Client<A> {
    onOpen: (send: (v: A) => void, close: () => void) => void // channel successfully established, we can now start sending and eventually close the channel
    onError: () => void                    // channel opening failed 
    onValue: (v: A) => void                // vaulue received from the channel
}

export class Channel<A> {
    constructor(t: zmFold<A>, client: Client<A>) {

        const skt = new WebSocket("ws://quid2.net:80/ws", "chats");
        skt.binaryType = "arraybuffer";

        const dec = t(flatDecoder);
        var firstTime = true;

        skt.onopen = function (event) {
            //conn.addEventListener('open', function (event) {
            //console.log("Channel:OPENED");
            skt.send(flat(typedBLOB(new ByType, $ByType(t))));
            //console.log("Channel:SENT ByType");

        };

        skt.onmessage = function (event) {
            console.log('Channel:message from server ', event.data);
            if (firstTime) {
                //console.log('Channel:message first answfrom server ', event.data);
                firstTime = false;
                const ansDecoder = $ChannelSelectionResult($WebSocketAddress($IP4Address))(flatDecoder);
                const answer: ChannelSelectionResult<WebSocketAddress<IP4Address>> = unflat(ansDecoder, new Uint8Array(event.data));
                answer.match({
                    Success: client.onOpen(function (v: A) { skt.send(flat(v)) }, function () { skt.close(); })
                    , Failure: function (err) { throw Error(JSON.stringify(err)) }
                    , RetryAt: function (addr) { throw Error("Retry is unsupported") }
                })
            } else {
                client.onValue(unflat(dec, new Uint8Array(event.data)));
            }
        };

        skt.onerror = function (event) {
            console.log("Channel:ERROR, now what?");
            client.onError();
        };

    }
}

// NOTE: code adapted from https://github.com/ohjames/rxjs-websockets
//TODO explain why not using directly the lib
/*
Each invocation causes a new connection to the specified Top channel to be established.
Return a couple of input and output,  they are related as values queued on the outChan won't be observed on the inChan.
The inChan is shared so that any subscription will work on the same underlying socket connection.
*/
export function channel<A>(t: zmFold<A>): [Observable<A>, QueueingSubject<A>] {

    const outChan = new QueueingSubject<A>();

    //const inChan = Observable.create(observer => {
    // every subcription creates a new socket..        
    const inChan = new Observable<A>(observer => {
        console.log("inChan SUBSCRIPTION")
        var firstTime = true;
        const dec = t(flatDecoder);
        let outSubscription: AnonymousSubscription;

        const socket = new WebSocket("ws://quid2.net:80/ws", "chats");
        socket.binaryType = "arraybuffer";

        socket.onopen = function () {
            console.log('socket.onopen');
            // Send CHATS channel opening request
            socket.send(flat(typedBLOB(new ByType, $ByType(t))));
        };

        socket.onmessage = function (event) {
            console.log('socket.onmessage', event.data, firstTime);

            if (firstTime) {
                // Receive CHATS answer
                firstTime = false;
                const ansDecoder = $ChannelSelectionResult($WebSocketAddress($IP4Address))(flatDecoder);
                const answer: ChannelSelectionResult<WebSocketAddress<IP4Address>> = unflat(ansDecoder, new Uint8Array(event.data));

                //console.log('CHATS:answer from server ', answer);
                answer.match({
                    Success:
                        outSubscription = outChan.subscribe(value => {
                            console.log('Channel:sending value', value);
                            socket.send(flat(value));
                        })
                    , Failure: (err) => { throw Error(JSON.stringify(err)) }
                    , RetryAt: (addr) => { throw Error("Retry is unsupported") }
                })

            } else {
                const val = unflat(dec, new Uint8Array(event.data));
                console.log('Channel:got data', event.data, val);
                observer.next(val);
            }
        };

        socket.onerror = function (error) {
            console.error("socket.onerror", event);
            // TODO: reconnect on error
            observer.error(error);
        }

        socket.onclose = (event: CloseEvent) => {
            console.error("socket.onclose", event);
            if (event.wasClean)
                observer.complete()
            else
                observer.error(new Error(event.reason))
        }

        return function unsubscribe() {
            console.log("COMPLETED", outSubscription, socket);
            if (outSubscription) outSubscription.unsubscribe()
            socket.close()
        }
    }).pipe(share());

    return [inChan, outChan];
}

//SHAKE128_48.prototype.pretty = function prettyShake48<I extends Flat>(s:SHAKE128_48<I>) : string {
//SHAKE128_48.prototype['pretty'] = function() : string {return this._0.value.toString(16);}

// Might fails if accesses asynchronously
class Multi {
    private vals: any = {};

    // has(key:string) : boolean {
    //    return ! isUndefined(this.values[key]);
    // }

    values(key: string) {
        const maybeValues = this.vals[key];
        return isUndefined(maybeValues) ? [] : maybeValues;
    }

    use(key: string, f: any) {
        this.values(key).map(f);
        delete this.values;
    }

    add(key: string, val: any) {
        var vals = this.vals[key];

        if (isUndefined(vals))
            vals = [val];
        else
            vals.push(val);

        this.vals[key] = vals;
    }

}

export class CallChannel<I extends ZM, R extends ZM> {
    private inChan: Observable<ZMFunction<I, R>>
    private outChan: QueueingSubject<ZMFunction<I, R>>

    private timeoutInMs: number;

    private calls = new Multi();

    constructor(inType: zmFold<I>, outType: zmFold<R>, ms: number = 7000) {
        const self = this;
        //const cs = channel($Function(inType, $SHAKE128_48(inType), outType));
        const cs = channel($Function(inType, outType));
        this.inChan = cs[0];
        this.outChan = cs[1];
        this.timeoutInMs = ms;

        this.inChan.pipe(filter(v => v instanceof Reply),
            //.map(v => v as Reply<I, SHAKE128_48<I>, R>)
            map(v => v as Reply<I, R>), )
            .subscribe(function (r) {
                //console.log("CALLS",self.calls,"REPLY",prettyShake48(r._0),self.calls.values(prettyShake48(r._0)),r.toString());
                const key = r._0.pretty();
                self.calls.use(key, function (f: any) { f(r._1) })
            })
    }

    /** Call remote function 
     * @param val the remote function parameter
     * @return a Promise of the remote function's result
    */
    call(val: I): Promise<R> {
        const self = this

        this.outChan.next(new Call(val))

        //const reply = promiseWithTimeout(self.timeoutInMs, function (resolve) {
        const reply: Promise<R> = new Promise(function (resolve) {
            const key = shake_128(flat(val), 48)
            self.calls.add(key, resolve)
        });

        //return promiseTimeout(self.timeoutInMs, reply)
        return reply; //promiseTimeout(self.timeoutInMs, reply)
    }
}

function testCall() {
    const ch = new CallChannel($Validate($SourceCode($ZM)), $List($Note($String, $Range)));
    //assert.fail("BAD")
    const results = [["Void ===", "Cons (Note \"unexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil"]
        , ["Void", "Nil"]
        , ["Void", "Nil"]
        , ["Bool = False | True |", "Cons (Note \"unexpected end of input expecting letter\" (Range (Position 0 21) (Position 0 21))) Nil"]
        , ["Void", "Nil"]
    ]
    var rs = results[0]
    for (let i = 0; i < results.length; i++) {
        let rs = results[i];
        ch.call(new Validate(new SourceCode(new ZML, new String(rs[0]))))
            .then(function (r) {
                console.log("OK", r.toString())
                //console.log("OK","Cons (Note \"nexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil")
                //throw "BABBABBA"
                assert.equal(rs[1], r.toString())
                //throw "ASSERT"
            }, r => assert.fail("rejected with " + r))
        //,done); //r => done(r) r => assert(false,"rejected with "+r))
    }
}

//testRX()
//testCall();

function testRX() {
    var observable: Observable<number> = Observable.create(function (observer: Observer<number>) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
            observer.next(5); //Won't be sent
        }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
    });
    console.log('just after subscribe');
}




