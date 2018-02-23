"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
//import {arraySize,zmId} from "./core";
const K87f090a54ea3_1 = require("./ADT/ByType/K87f090a54ea3");
const K614edd84c8bd_1 = require("./ADT/TypedBLOB/K614edd84c8bd");
const Kf139d4751fda_1 = require("./ADT/BLOB/Kf139d4751fda");
const K982148c09ddb_1 = require("./ADT/FlatEncoding/K982148c09ddb");
const Kf8844385a443_1 = require("./ADT/Bytes/Kf8844385a443");
const Kc6627a317dbc_1 = require("./ADT/ChannelSelectionResult/Kc6627a317dbc");
const Kc802c6aae1af_1 = require("./ADT/WebSocketAddress/Kc802c6aae1af");
const K6cb2ee3ac409_1 = require("./ADT/IP4Address/K6cb2ee3ac409");
const K56179bc11dc1_1 = require("./ADT/Function/K56179bc11dc1");
const K9f214799149b_1 = require("./ADT/SHAKE128_48/K9f214799149b");
const Kb9b08d43766f_1 = require("./ADT/SourceCode/Kb9b08d43766f");
const K2f006595638c_1 = require("./ADT/String/K2f006595638c");
//import {$Issues,Issues} from  './ADT/Issues/Kd0790379c631'
const Kffe0940f8ff2_1 = require("./ADT/Validate/Kffe0940f8ff2");
const K63b2d97244bc_1 = require("./ADT/Range/K63b2d97244bc");
const Kb3a40bdda26f_1 = require("./ADT/ZM/Kb3a40bdda26f");
const Kb8cd13187198_1 = require("./ADT/List/Kb8cd13187198");
const K21b7bfc3d09c_1 = require("./ADT/Note/K21b7bfc3d09c");
//import Rx from 'rxjs/Rx';
const queueing_subject_1 = require("queueing-subject");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
require("rxjs/add/operator/filter");
// https://italonascimento.github.io/applying-a-timeout-to-your-promises/
exports.promiseTimeout = function (ms, promise) {
    // Create a promise that rejects in <ms> milliseconds
    let timeout = new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.');
        }, ms);
    });
    // Returns a race between our timeout and the passed in promise
    return Promise.race([
        promise,
        timeout
    ]);
};
function flatBLOB(v) {
    //return new BLOB(new FlatEncoding,new Bytes(new PreAligned(new FillerEnd(),flat (new ByType))));
    return new Kf139d4751fda_1.BLOB(new K982148c09ddb_1.FlatEncoding, new Kf8844385a443_1.Bytes(api_1.flat(v)));
}
exports.flatBLOB = flatBLOB;
function typedBLOB(v, t) {
    return new K614edd84c8bd_1.TypedBLOB(t(api_1.zmType), flatBLOB(v));
}
exports.typedBLOB = typedBLOB;
class Channel {
    constructor(t, client) {
        const skt = new WebSocket("ws://quid2.net:80/ws", "chats");
        skt.binaryType = "arraybuffer";
        const dec = t(api_1.flatDecoder);
        var firstTime = true;
        skt.onopen = function (event) {
            //conn.addEventListener('open', function (event) {
            //console.log("Channel:OPENED");
            skt.send(api_1.flat(typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(t))));
            //console.log("Channel:SENT ByType");
        };
        skt.onmessage = function (event) {
            console.log('Channel:message from server ', event.data);
            if (firstTime) {
                //console.log('Channel:message first answfrom server ', event.data);
                firstTime = false;
                const ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(api_1.flatDecoder);
                const answer = api_1.unflat(ansDecoder, new Uint8Array(event.data));
                answer.match({
                    Success: client.onOpen(function (v) { skt.send(api_1.flat(v)); }, function () { skt.close(); }),
                    Failure: function (err) { throw Error(JSON.stringify(err)); },
                    RetryAt: function (addr) { throw Error("Retry is unsupported"); }
                });
            }
            else {
                client.onValue(api_1.unflat(dec, new Uint8Array(event.data)));
            }
        };
        skt.onerror = function (event) {
            console.log("Channel:ERROR, now what?");
            client.onError();
        };
    }
}
exports.Channel = Channel;
// NOTE: code adapted from https://github.com/ohjames/rxjs-websockets
/*
Each invocation causes a new connection to the specified Top channel to be established.
Return a couple of input and output,  they are related as values queued on the outChan won't be observed on the inChan.
The inChan is shared so that any subscription will work on the same underlying socket connection.
*/
function channel(t) {
    const outChan = new queueing_subject_1.QueueingSubject();
    //const inChan = Observable.create(observer => {
    // every subcription creates a new socket..        
    const inChan = new Observable_1.Observable(observer => {
        console.log("inChan SUBSCRIPTION");
        var firstTime = true;
        const dec = t(api_1.flatDecoder);
        let outSubscription;
        const socket = new WebSocket("ws://quid2.net:80/ws", "chats");
        socket.binaryType = "arraybuffer";
        socket.onopen = function () {
            console.log('socket.onopen');
            // Send CHATS channel opening request
            socket.send(api_1.flat(typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(t))));
        };
        socket.onmessage = function (event) {
            console.log('socket.onmessage', event.data, firstTime);
            if (firstTime) {
                // Receive CHATS answer
                firstTime = false;
                const ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(api_1.flatDecoder);
                const answer = api_1.unflat(ansDecoder, new Uint8Array(event.data));
                //console.log('CHATS:answer from server ', answer);
                answer.match({
                    Success: outSubscription = outChan.subscribe(value => {
                        console.log('Channel:sending value', value);
                        socket.send(api_1.flat(value));
                    }),
                    Failure: (err) => { throw Error(JSON.stringify(err)); },
                    RetryAt: (addr) => { throw Error("Retry is unsupported"); }
                });
            }
            else {
                console.log('Channel:got data', event.data);
                observer.next(api_1.unflat(dec, new Uint8Array(event.data)));
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
    }).share();
    return [inChan, outChan];
}
exports.channel = channel;
class CallChannel {
    constructor(inType, outType, ms = 7000) {
        const self = this;
        const cs = channel(K56179bc11dc1_1.$Function(inType, K9f214799149b_1.$SHAKE128_48(inType), outType));
        this.inChan = cs[0];
        this.outChan = cs[1];
        this.timeoutInMs = ms;
        this.inChan.filter(v => v instanceof K56179bc11dc1_1.Reply)
            .map(v => v._1)
            .subscribe(function (r) {
            console.log("REPLY", r);
            if (self.calls)
                self.calls(r);
            //this.calls = undefined;
        });
    }
    call(val) {
        const self = this;
        this.outChan.next(new K56179bc11dc1_1.Call(val));
        return exports.promiseTimeout(self.timeoutInMs, new Promise(function (resolve, reject) {
            self.calls = resolve;
        }));
    }
}
exports.CallChannel = CallChannel;
function testRX() {
    var observable = Observable_1.Observable.create(function (observer) {
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
function testCall() {
    const ch = new CallChannel(Kffe0940f8ff2_1.$Validate(Kb9b08d43766f_1.$SourceCode(Kb3a40bdda26f_1.$ZM)), Kb8cd13187198_1.$List(K21b7bfc3d09c_1.$Note(K2f006595638c_1.$String, K63b2d97244bc_1.$Range)));
    ch.call(new Kffe0940f8ff2_1.Validate(new Kb9b08d43766f_1.SourceCode(new Kb3a40bdda26f_1.ZM, new K2f006595638c_1.String("Void ==="))))
        .then(r => console.log("CALL RESULT", r))
        .catch(e => console.log("CALL FAILED", e));
}
//testRX()
testCall();
//# sourceMappingURL=top.js.map