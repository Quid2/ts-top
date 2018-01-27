import {flat,Channel,typedBLOB} from '../index'
import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'

export function testTop() {
    var chan0 = 
      new Channel($Bit
        , {
            onOpen: function (send,close) {}
            , onError: function () { throw Error("Channel failed") }
            , onValue: v => console.log("received", v)
        });

    var chan = 
        new Channel($Bit
            , {
                onOpen: function (send,close) {
                    for (let v of [new V1, new V0, new V1, new V1,new V1]) {console.log(v);send(v);}
                    close()}
                , onError: function () { throw Error("Channel failed") }
                , onValue: v => console.log("received", v)
            });
}

testTop();