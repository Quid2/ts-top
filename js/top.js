"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallChannel = exports.channel = exports.Channel = void 0;
/**
 * Support for [top](http://quid2.org)
 * @packageDocumentation
 */
const flat_1 = require("./flat");
const util_1 = require("./util");
const es6_promise_1 = require("es6-promise");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
//import {arraySize,zmId} from "./core";
//import { Promise } from 'es6-promise';
const K87f090a54ea3_1 = require("@quid2/adt/ByType/K87f090a54ea3");
const socket_1 = require("./top/socket");
Object.defineProperty(exports, "Channel", { enumerable: true, get: function () { return socket_1.Channel; } });
const Kc6627a317dbc_1 = require("@quid2/adt/ChannelSelectionResult/Kc6627a317dbc");
const Kc802c6aae1af_1 = require("@quid2/adt/WebSocketAddress/Kc802c6aae1af");
const K6cb2ee3ac409_1 = require("@quid2/adt/IP4Address/K6cb2ee3ac409");
const K2396c227c787_1 = require("@quid2/adt/Function/K2396c227c787");
const Kb9b08d43766f_1 = require("@quid2/adt/SourceCode/Kb9b08d43766f");
const K2f006595638c_1 = require("@quid2/adt/String/K2f006595638c");
//import {$Issues,Issues} from  '@quid2/adt/Issues/Kd0790379c631'
const Kffe0940f8ff2_1 = require("@quid2/adt/Validate/Kffe0940f8ff2");
const K63b2d97244bc_1 = require("@quid2/adt/Range/K63b2d97244bc");
const Kb3a40bdda26f_1 = require("@quid2/adt/ZM/Kb3a40bdda26f");
const Kb8cd13187198_1 = require("@quid2/adt/List/Kb8cd13187198");
const K21b7bfc3d09c_1 = require("@quid2/adt/Note/K21b7bfc3d09c");
const queueing_subject_1 = require("queueing-subject");
const chai_1 = require("chai");
const js_sha3_1 = require("js-sha3");
const ts_1 = require("@quid2/prim/ts");
// https://italonascimento.github.io/applying-a-timeout-to-your-promises/
// export const promiseTimeout = function <A>(
//   ms: number,
//   promise: Promise<A>
// ): Promise<{} | A> {
//   // Create a promise that rejects in <ms> milliseconds
//   let timeout = new Promise((resolve, reject) => {
//     let id = setTimeout(() => {
//       clearTimeout(id);
//       reject("Timed out in " + ms + "ms.");
//     }, ms);
//   });
//   // Returns a race between our timeout and the passed in promise
//   return Promise.race([promise, timeout]);
// };
// export const promiseWithTimeout = function <A>(
//   ms: Number,
//   f: (resolve: (value: A) => void, reject: (reason?: any) => void) => void
// ): Promise<A> {
//   // Create a promise that rejects in <ms> milliseconds
//   return new Promise((resolve, reject) => {
//     let id = setTimeout(() => {
//       clearTimeout(id);
//       reject("Timed out in " + ms + "ms.");
//     }, ms);
//     f(resolve, reject);
//   });
// };
// NOTE: code adapted from https://github.com/ohjames/rxjs-websockets
//TODO explain why not using directly the lib
/*
Each invocation causes a new connection to the specified Top channel to be established.
Return a couple of input and output,  they are related as values queued on the outChan won't be observed on the inChan.
The inChan is shared so that any subscription will work on the same underlying socket connection.
*/
function channel(t) {
    const outChan = new queueing_subject_1.QueueingSubject();
    //const inChan = Observable.create(observer => {
    // every subcription creates a new socket..
    const inChan = new rxjs_1.Observable((observer) => {
        console.log("inChan SUBSCRIPTION");
        var firstTime = true;
        const dec = t(ts_1.flatDecoder);
        let outSubscription;
        const socket = new WebSocket("ws://quid2.net:80/ws", "chats");
        socket.binaryType = "arraybuffer";
        socket.onopen = function () {
            console.log("socket.onopen");
            // Send CHATS channel opening request
            socket.send(flat_1.flat(util_1.typedBLOB(new K87f090a54ea3_1.ByType(), K87f090a54ea3_1.$ByType(t))));
        };
        socket.onmessage = function (event) {
            console.log("socket.onmessage", event.data, firstTime);
            if (firstTime) {
                // Receive CHATS answer
                firstTime = false;
                const ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(ts_1.flatDecoder);
                const answer = flat_1.unflat(ansDecoder, new Uint8Array(event.data));
                //console.log('CHATS:answer from server ', answer);
                answer.match({
                    Success: outSubscription = outChan.subscribe((value) => {
                        console.log("Channel:sending value", value);
                        socket.send(flat_1.flat(value));
                    }),
                    Failure: (err) => {
                        throw Error(JSON.stringify(err));
                    },
                    RetryAt: (addr) => {
                        throw Error("Retry is unsupported");
                    },
                });
            }
            else {
                const val = flat_1.unflat(dec, new Uint8Array(event.data));
                console.log("Channel:got data", event.data, val);
                observer.next(val);
            }
        };
        socket.onerror = function (error) {
            console.error("socket.onerror", event);
            // TODO: reconnect on error
            observer.error(error);
        };
        socket.onclose = (event) => {
            console.error("socket.onclose", event);
            if (event.wasClean)
                observer.complete();
            else
                observer.error(new Error(event.reason));
        };
        return function unsubscribe() {
            console.log("COMPLETED", outSubscription, socket);
            if (outSubscription)
                outSubscription.unsubscribe();
            socket.close();
        };
    }).pipe(operators_1.share());
    return [inChan, outChan];
}
exports.channel = channel;
//SHAKE128_48.prototype.pretty = function prettyShake48<I extends Flat>(s:SHAKE128_48<I>) : string {
//SHAKE128_48.prototype['pretty'] = function() : string {return this._0.value.toString(16);}
// Might fail if accessed asynchronously
class Multi {
    constructor() {
        this.vals = {};
    }
    // has(key:string) : boolean {
    //    return ! isUndefined(this.values[key]);
    // }
    values(key) {
        const maybeValues = this.vals[key];
        return maybeValues ? maybeValues : [];
    }
    use(key, f) {
        this.values(key).map(f);
        delete this.values;
    }
    add(key, val) {
        var vals = this.vals[key];
        if (vals)
            vals = [val];
        else
            vals.push(val);
        this.vals[key] = vals;
    }
}
class CallChannel {
    constructor(inType, outType, ms = 7000) {
        this.calls = new Multi();
        const self = this;
        //const cs = channel($Function(inType, $SHAKE128_48(inType), outType));
        const cs = channel(K2396c227c787_1.$Function(inType, outType));
        this.inChan = cs[0];
        this.outChan = cs[1];
        this.timeoutInMs = ms;
        this.inChan
            .pipe(operators_1.filter((v) => v instanceof K2396c227c787_1.Reply), 
        //.map(v => v as Reply<I, SHAKE128_48<I>, R>)
        operators_1.map((v) => v))
            .subscribe(function (r) {
            //console.log("CALLS",self.calls,"REPLY",prettyShake48(r._0),self.calls.values(prettyShake48(r._0)),r.toString());
            const key = r._0.pretty();
            self.calls.use(key, function (f) {
                f(r._1);
            });
        });
    }
    /** Call remote function
     * @param val the remote function parameter
     * @return a Promise of the remote function's result
     */
    call(val) {
        const self = this;
        this.outChan.next(new K2396c227c787_1.Call(val));
        //const reply = promiseWithTimeout(self.timeoutInMs, function (resolve) {
        const reply = new es6_promise_1.Promise(function (resolve) {
            const key = js_sha3_1.shake_128(flat_1.flat(val), 48);
            self.calls.add(key, resolve);
        });
        //return promiseTimeout(self.timeoutInMs, reply)
        return reply; //promiseTimeout(self.timeoutInMs, reply)
    }
}
exports.CallChannel = CallChannel;
function testCall() {
    const ch = new CallChannel(Kffe0940f8ff2_1.$Validate(Kb9b08d43766f_1.$SourceCode(Kb3a40bdda26f_1.$ZM)), Kb8cd13187198_1.$List(K21b7bfc3d09c_1.$Note(K2f006595638c_1.$String, K63b2d97244bc_1.$Range)));
    //assert.fail("BAD")
    const results = [
        [
            "Void ===",
            "Cons (Note \"unexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil",
        ],
        ["Void", "Nil"],
        ["Void", "Nil"],
        [
            "Bool = False | True |",
            'Cons (Note "unexpected end of input expecting letter" (Range (Position 0 21) (Position 0 21))) Nil',
        ],
        ["Void", "Nil"],
    ];
    var rs = results[0];
    for (let i = 0; i < results.length; i++) {
        let rs = results[i];
        ch.call(new Kffe0940f8ff2_1.Validate(new Kb9b08d43766f_1.SourceCode(new Kb3a40bdda26f_1.ZM(), new K2f006595638c_1.String(rs[0])))).then(function (r) {
            console.log("OK", r.toString());
            //console.log("OK","Cons (Note \"nexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil")
            //throw "BABBABBA"
            chai_1.assert.equal(rs[1], r.toString());
            //throw "ASSERT"
        }, (r) => chai_1.assert.fail("rejected with " + r));
        //,done); //r => done(r) r => assert(false,"rejected with "+r))
    }
}
//testRX()
//testCall();
function testRX() {
    var observable = rxjs_1.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
            observer.next(5); //Won't be sent
        }, 1000);
    });
    console.log("just before subscribe");
    observable.subscribe({
        next: (x) => console.log("got value " + x),
        error: (err) => console.error("something wrong occurred: " + err),
        complete: () => console.log("done"),
    });
    console.log("just after subscribe");
}
//# sourceMappingURL=top.js.map