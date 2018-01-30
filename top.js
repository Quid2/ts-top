"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const K87f090a54ea3_1 = require("./ADT/ByType/K87f090a54ea3");
const K614edd84c8bd_1 = require("./ADT/TypedBLOB/K614edd84c8bd");
const Kf139d4751fda_1 = require("./ADT/BLOB/Kf139d4751fda");
const K982148c09ddb_1 = require("./ADT/FlatEncoding/K982148c09ddb");
const Kf8844385a443_1 = require("./ADT/Bytes/Kf8844385a443");
const Kc6627a317dbc_1 = require("./ADT/ChannelSelectionResult/Kc6627a317dbc");
const Kc802c6aae1af_1 = require("./ADT/WebSocketAddress/Kc802c6aae1af");
const K6cb2ee3ac409_1 = require("./ADT/IP4Address/K6cb2ee3ac409");
const queueing_subject_1 = require("queueing-subject");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
function flatBLOB(v) {
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
            skt.send(api_1.flat(typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(t))));
        };
        skt.onmessage = function (event) {
            console.log('Channel:message from server ', event.data);
            if (firstTime) {
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
function channel(t) {
    const outChan = new queueing_subject_1.QueueingSubject();
    const inChan = new Observable_1.Observable(observer => {
        console.log("inChan SUBSCRIPTION");
        var firstTime = true;
        const dec = t(api_1.flatDecoder);
        let outSubscription;
        const socket = new WebSocket("ws://quid2.net:80/ws", "chats");
        socket.binaryType = "arraybuffer";
        socket.onopen = function () {
            console.log('socket.onopen');
            socket.send(api_1.flat(typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(t))));
        };
        socket.onmessage = function (event) {
            console.log('socket.onmessage', event.data, firstTime);
            if (firstTime) {
                firstTime = false;
                const ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(api_1.flatDecoder);
                const answer = api_1.unflat(ansDecoder, new Uint8Array(event.data));
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
function testRX() {
    var observable = Observable_1.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
            observer.next(5);
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
//# sourceMappingURL=top.js.map