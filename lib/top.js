"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var operators_1 = require("rxjs/operators");
var Observable_1 = require("rxjs/Observable");
var api_1 = require("./api");
//import {arraySize,zmId} from "./core";
//import { Promise } from 'es6-promise';
var K87f090a54ea3_1 = require("../ADT/ByType/K87f090a54ea3");
//import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'
var K614edd84c8bd_1 = require("../ADT/TypedBLOB/K614edd84c8bd");
var Kf139d4751fda_1 = require("../ADT/BLOB/Kf139d4751fda");
var K982148c09ddb_1 = require("../ADT/FlatEncoding/K982148c09ddb");
//import { FillerEnd } from "../ADT/Filler/Kae1dfeece189";
var Kf8844385a443_1 = require("../ADT/Bytes/Kf8844385a443");
var Kc6627a317dbc_1 = require("../ADT/ChannelSelectionResult/Kc6627a317dbc");
var Kc802c6aae1af_1 = require("../ADT/WebSocketAddress/Kc802c6aae1af");
var K6cb2ee3ac409_1 = require("../ADT/IP4Address/K6cb2ee3ac409");
var K2396c227c787_1 = require("../ADT/Function/K2396c227c787");
var Kb9b08d43766f_1 = require("../ADT/SourceCode/Kb9b08d43766f");
var K2f006595638c_1 = require("../ADT/String/K2f006595638c");
//import {$Issues,Issues} from  '../ADT/Issues/Kd0790379c631'
var Kffe0940f8ff2_1 = require("../ADT/Validate/Kffe0940f8ff2");
var K63b2d97244bc_1 = require("../ADT/Range/K63b2d97244bc");
var Kb3a40bdda26f_1 = require("../ADT/ZM/Kb3a40bdda26f");
var Kb8cd13187198_1 = require("../ADT/List/Kb8cd13187198");
var K21b7bfc3d09c_1 = require("../ADT/Note/K21b7bfc3d09c");
var queueing_subject_1 = require("queueing-subject");
var chai_1 = require("chai");
//import "chai-as-promised" as CAP;
//chai.use(chaiAsPromised);
var js_sha3_1 = require("js-sha3");
var util_1 = require("util");
//import { prettyShake48 } from "./util"
// https://italonascimento.github.io/applying-a-timeout-to-your-promises/
exports.promiseTimeout = function (ms, promise) {
    // Create a promise that rejects in <ms> milliseconds
    var timeout = new es6_promise_1.Promise(function (resolve, reject) {
        var id = setTimeout(function () {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.');
        }, ms);
    });
    // Returns a race between our timeout and the passed in promise
    return es6_promise_1.Promise.race([
        promise,
        timeout
    ]);
};
exports.promiseWithTimeout = function (ms, f) {
    // Create a promise that rejects in <ms> milliseconds
    return new es6_promise_1.Promise(function (resolve, reject) {
        var id = setTimeout(function () {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.');
        }, ms);
        f(resolve, reject);
    });
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
var Channel = /** @class */ (function () {
    function Channel(t, client) {
        var skt = new WebSocket("ws://quid2.net:80/ws", "chats");
        skt.binaryType = "arraybuffer";
        var dec = t(api_1.flatDecoder);
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
                var ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(api_1.flatDecoder);
                var answer = api_1.unflat(ansDecoder, new Uint8Array(event.data));
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
    return Channel;
}());
exports.Channel = Channel;
// NOTE: code adapted from https://github.com/ohjames/rxjs-websockets
//TODO explain why not using directly the lib
/*
Each invocation causes a new connection to the specified Top channel to be established.
Return a couple of input and output,  they are related as values queued on the outChan won't be observed on the inChan.
The inChan is shared so that any subscription will work on the same underlying socket connection.
*/
function channel(t) {
    var outChan = new queueing_subject_1.QueueingSubject();
    //const inChan = Observable.create(observer => {
    // every subcription creates a new socket..        
    var inChan = new Observable_1.Observable(function (observer) {
        console.log("inChan SUBSCRIPTION");
        var firstTime = true;
        var dec = t(api_1.flatDecoder);
        var outSubscription;
        var socket = new WebSocket("ws://quid2.net:80/ws", "chats");
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
                var ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(api_1.flatDecoder);
                var answer = api_1.unflat(ansDecoder, new Uint8Array(event.data));
                //console.log('CHATS:answer from server ', answer);
                answer.match({
                    Success: outSubscription = outChan.subscribe(function (value) {
                        console.log('Channel:sending value', value);
                        socket.send(api_1.flat(value));
                    }),
                    Failure: function (err) { throw Error(JSON.stringify(err)); },
                    RetryAt: function (addr) { throw Error("Retry is unsupported"); }
                });
            }
            else {
                var val = api_1.unflat(dec, new Uint8Array(event.data));
                console.log('Channel:got data', event.data, val);
                observer.next(val);
            }
        };
        socket.onerror = function (error) {
            console.error("socket.onerror", event);
            // TODO: reconnect on error
            observer.error(error);
        };
        socket.onclose = function (event) {
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
// Might fails if accesses asynchronously
var Multi = /** @class */ (function () {
    function Multi() {
        this.vals = {};
    }
    // has(key:string) : boolean {
    //    return ! isUndefined(this.values[key]);
    // }
    Multi.prototype.values = function (key) {
        var maybeValues = this.vals[key];
        return util_1.isUndefined(maybeValues) ? [] : maybeValues;
    };
    Multi.prototype.use = function (key, f) {
        this.values(key).map(f);
        delete this.values;
    };
    Multi.prototype.add = function (key, val) {
        var vals = this.vals[key];
        if (util_1.isUndefined(vals))
            vals = [val];
        else
            vals.push(val);
        this.vals[key] = vals;
    };
    return Multi;
}());
var CallChannel = /** @class */ (function () {
    function CallChannel(inType, outType, ms) {
        if (ms === void 0) { ms = 7000; }
        this.calls = new Multi();
        var self = this;
        //const cs = channel($Function(inType, $SHAKE128_48(inType), outType));
        var cs = channel(K2396c227c787_1.$Function(inType, outType));
        this.inChan = cs[0];
        this.outChan = cs[1];
        this.timeoutInMs = ms;
        this.inChan.pipe(operators_1.filter(function (v) { return v instanceof K2396c227c787_1.Reply; }), 
        //.map(v => v as Reply<I, SHAKE128_48<I>, R>)
        operators_1.map(function (v) { return v; }))
            .subscribe(function (r) {
            //console.log("CALLS",self.calls,"REPLY",prettyShake48(r._0),self.calls.values(prettyShake48(r._0)),r.toString());
            var key = r._0.pretty();
            self.calls.use(key, function (f) { f(r._1); });
        });
    }
    /** Call remote function
     * @param val the remote function parameter
     * @return a Promise of the remote function's result
    */
    CallChannel.prototype.call = function (val) {
        var self = this;
        this.outChan.next(new K2396c227c787_1.Call(val));
        //const reply = promiseWithTimeout(self.timeoutInMs, function (resolve) {
        var reply = new es6_promise_1.Promise(function (resolve) {
            var key = js_sha3_1.shake_128(api_1.flat(val), 48);
            self.calls.add(key, resolve);
        });
        //return promiseTimeout(self.timeoutInMs, reply)
        return reply; //promiseTimeout(self.timeoutInMs, reply)
    };
    return CallChannel;
}());
exports.CallChannel = CallChannel;
function testCall() {
    var ch = new CallChannel(Kffe0940f8ff2_1.$Validate(Kb9b08d43766f_1.$SourceCode(Kb3a40bdda26f_1.$ZM)), Kb8cd13187198_1.$List(K21b7bfc3d09c_1.$Note(K2f006595638c_1.$String, K63b2d97244bc_1.$Range)));
    //assert.fail("BAD")
    var results = [["Void ===", "Cons (Note \"unexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil"],
        ["Void", "Nil"],
        ["Void", "Nil"],
        ["Bool = False | True |", "Cons (Note \"unexpected end of input expecting letter\" (Range (Position 0 21) (Position 0 21))) Nil"],
        ["Void", "Nil"]
    ];
    var rs = results[0];
    var _loop_1 = function (i) {
        var rs_1 = results[i];
        ch.call(new Kffe0940f8ff2_1.Validate(new Kb9b08d43766f_1.SourceCode(new Kb3a40bdda26f_1.ZM, new K2f006595638c_1.String(rs_1[0]))))
            .then(function (r) {
            console.log("OK", r.toString());
            //console.log("OK","Cons (Note \"nexpected '=' expecting ';', end of input, or letter\" (Range (Position 0 6) (Position 0 6))) Nil")
            //throw "BABBABBA"
            chai_1.assert.equal(rs_1[1], r.toString());
            //throw "ASSERT"
        }, function (r) { return chai_1.assert.fail("rejected with " + r); });
        //,done); //r => done(r) r => assert(false,"rejected with "+r))
    };
    for (var i = 0; i < results.length; i++) {
        _loop_1(i);
    }
}
//testRX()
//testCall();
function testRX() {
    var observable = Observable_1.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(function () {
            observer.next(4);
            observer.complete();
            observer.next(5); //Won't be sent
        }, 1000);
    });
    console.log('just before subscribe');
    observable.subscribe({
        next: function (x) { return console.log('got value ' + x); },
        error: function (err) { return console.error('something wrong occurred: ' + err); },
        complete: function () { return console.log('done'); }
    });
    console.log('just after subscribe');
}
