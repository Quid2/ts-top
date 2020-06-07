"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const flat_1 = require("../flat");
const util_1 = require("../util");
const K87f090a54ea3_1 = require("@quid2/adt/ByType/K87f090a54ea3");
const Kc6627a317dbc_1 = require("@quid2/adt/ChannelSelectionResult/Kc6627a317dbc");
const Kc802c6aae1af_1 = require("@quid2/adt/WebSocketAddress/Kc802c6aae1af");
const K6cb2ee3ac409_1 = require("@quid2/adt/IP4Address/K6cb2ee3ac409");
// Simple callback implementation
class Channel {
    constructor(t, client) {
        const skt = new WebSocket("ws://quid2.net:80/ws", "chats");
        skt.binaryType = "arraybuffer";
        const dec = t(flat_1.flatDecoder);
        var firstTime = true;
        skt.onopen = function (event) {
            //conn.addEventListener('open', function (event) {
            //console.log("Channel:OPENED");
            skt.send(flat_1.flat(util_1.typedBLOB(new K87f090a54ea3_1.ByType(), K87f090a54ea3_1.$ByType(t))));
            //console.log("Channel:SENT ByType");
        };
        skt.onmessage = function (event) {
            console.log("Channel:message from server ", event.data);
            if (firstTime) {
                //console.log('Channel:message first answfrom server ', event.data);
                firstTime = false;
                const ansDecoder = Kc6627a317dbc_1.$ChannelSelectionResult(Kc802c6aae1af_1.$WebSocketAddress(K6cb2ee3ac409_1.$IP4Address))(flat_1.flatDecoder);
                const answer = flat_1.unflat(ansDecoder, new Uint8Array(event.data));
                answer.match({
                    Success: client.onOpen(function (v) {
                        skt.send(flat_1.flat(v));
                    }, function () {
                        skt.close();
                    }),
                    Failure: function (err) {
                        throw Error(JSON.stringify(err));
                    },
                    RetryAt: function (addr) {
                        throw Error("Retry is unsupported");
                    },
                });
            }
            else {
                client.onValue(flat_1.unflat(dec, new Uint8Array(event.data)));
            }
        };
        skt.onerror = function (event) {
            console.log("Channel:ERROR, now what?");
            client.onError();
        };
    }
}
exports.Channel = Channel;
//# sourceMappingURL=socket.js.map