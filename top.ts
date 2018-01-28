import { flat, zmType, zmFold, flatDecoder, unflat, Decoder } from "./api";
//import {arraySize,zmId} from "./core";

import { ByType, $ByType } from './ADT/ByType/K87f090a54ea3'
import { Bit, V0, V1, $Bit } from './ADT/Bit/K65149ce3b366'
import { TypedBLOB } from './ADT/TypedBLOB/K614edd84c8bd'
import { Word8 } from './ADT/Word8/Kb1f46a49c8f8'
import { BLOB } from './ADT/BLOB/Kf139d4751fda'
import { FlatEncoding } from './ADT/FlatEncoding/K982148c09ddb'

//import {Array,A1,A0} from  './ADT/Array/K2e8b4519aeaa'
//import {Array} from  './ADT/Array/K2e8b4519aeaa'
import { Tuple2 } from './ADT/Tuple2/Ka5583bf3ad34'
import { $Either } from './ADT/Either/K6260e465ae74'
import { $Maybe } from './ADT/Maybe/Kda6836778fd4'
import { $Bool, Bool,True } from './ADT/Bool/K306f1981b41c'
import { PreAligned } from "./ADT/PreAligned/Kb2f28cf37d12";
import { FillerEnd } from "./ADT/Filler/Kae1dfeece189";
import { Bytes } from './ADT/Bytes/Kf8844385a443'
import { ChannelSelectionResult, $ChannelSelectionResult, RetryAt } from './ADT/ChannelSelectionResult/Kc6627a317dbc'
import { $WebSocketAddress, WebSocketAddress } from './ADT/WebSocketAddress/Kc802c6aae1af'
import { $IP4Address, IP4Address } from './ADT/IP4Address/K6cb2ee3ac409'


export function flatBLOB(v: any): BLOB<FlatEncoding> {
    //return new BLOB(new FlatEncoding,new Bytes(new PreAligned(new FillerEnd(),flat (new ByType))));
    return new BLOB(new FlatEncoding, new Bytes(flat(v)));
}

export function typedBLOB(v: any, t: zmFold<any>): TypedBLOB {
    return new TypedBLOB(t(zmType), flatBLOB(v));
}



//
//flat (Success :: ChannelSelectionResult (WebSocketAddress IP4Address))
//[1]

//let chType : ByType<Bit> = new ByType();
//console.log(chType,JSON.stringify (typeof chType));

//let f = Flat.flat (<ByType<Bit>>:new ByType());
//console.log(new Uint8Array(f));
//console.log(new (f));

export interface Client<A> {
    onOpen: (send: (v: A) => void,close:() => void) => void // channel successfully established, we can now start sending and eventually close the channel
    onError: () => void                    // channel opening failed 
    onValue: (v: A) => void                // vaulue received from the channel
}

export class Channel<A> {
    //private socket: WebSocket;
    //private dec: Decoder;

    constructor(t: zmFold<A>, client: Client<A>) {

        //this.socket = new WebSocket("ws://quid2.net:80/ws", "chats");
        //var skt = this.socket;
        
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
                    Success: client.onOpen(function (v: A) { skt.send(flat(v))},function (){skt.close();})
                    , Failure: function (err) { throw Error(JSON.stringify(err)) }
                    , RetryAt: function (addr) { throw Error("Retry is unsupported") }
                })
            } else {
                client.onValue(unflat(dec,new Uint8Array(event.data)));
            }
        };
    
        skt.onerror = function (event) {
            console.log("Channel:ERROR, now what?");
            client.onError();
        };

    }
}



