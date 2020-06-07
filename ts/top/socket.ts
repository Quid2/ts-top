import { flat, unflat, Decoder, flatDecoder } from "../flat";
import { zmFold } from "../zm";
import { typedBLOB } from "../util";

import { ByType, $ByType } from "@quid2/adt/ByType/K87f090a54ea3";
import {
  ChannelSelectionResult,
  $ChannelSelectionResult,
  RetryAt,
} from "@quid2/adt/ChannelSelectionResult/Kc6627a317dbc";

import {
  $WebSocketAddress,
  WebSocketAddress,
} from "@quid2/adt/WebSocketAddress/Kc802c6aae1af";

import { $IP4Address, IP4Address } from "@quid2/adt/IP4Address/K6cb2ee3ac409";

export interface Client<A> {
  onOpen: (send: (v: A) => void, close: () => void) => void; // channel successfully established, we can now start sending and eventually close the channel
  onError: () => void; // channel opening failed
  onValue: (v: A) => void; // value received from the channel
}

// Simple callback implementation
export class Channel<A> {
  constructor(t: zmFold<A>, client: Client<A>) {
    const skt = new WebSocket("ws://quid2.net:80/ws", "chats");
    skt.binaryType = "arraybuffer";

    const dec: Decoder = t(flatDecoder);
    var firstTime = true;

    skt.onopen = function (event) {
      //conn.addEventListener('open', function (event) {
      //console.log("Channel:OPENED");
      skt.send(flat(typedBLOB(new ByType(), $ByType(t))));
      //console.log("Channel:SENT ByType");
    };

    skt.onmessage = function (event) {
      console.log("Channel:message from server ", event.data);
      if (firstTime) {
        //console.log('Channel:message first answfrom server ', event.data);
        firstTime = false;
        const ansDecoder: Decoder = $ChannelSelectionResult(
          $WebSocketAddress($IP4Address)
        )(flatDecoder);
        const answer: ChannelSelectionResult<WebSocketAddress<
          IP4Address
        >> = unflat(ansDecoder, new Uint8Array(event.data));
        answer.match({
          Success: client.onOpen(
            function (v: A) {
              skt.send(flat(v));
            },
            function () {
              skt.close();
            }
          ),
          Failure: function (err) {
            throw Error(JSON.stringify(err));
          },
          RetryAt: function (addr) {
            throw Error("Retry is unsupported");
          },
        });
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
