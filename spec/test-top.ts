import { flat, typedBLOB } from '../index'
import { Channel, channel } from '../top'
import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'

export function testTop() {
    var chan0 =
        new Channel($Bit
            , {
                onOpen: function (send, close) { }
                , onError: function () { throw Error("Channel failed") }
                , onValue: v => console.log("received", v)
            });

    var chan =
        new Channel($Bit
            , {
                onOpen: function (send, close) {
                    for (let v of [new V1, new V0, new V1, new V1, new V1]) { console.log(v); send(v); }
                    close()
                }
                , onError: function () { throw Error("Channel failed") }
                , onValue: v => console.log("received", v)
            });
}

//testTop();

function testTopRX() {
    const { inChan, outChan } = channel($Bit);

    var inSubscription = inChan.subscribe({
        next: x => console.log('inChan:value', x),
        error: err => console.error('inChan:error', err),
        complete: () => console.log('inChan:complete'),
    });

    // close connection
    //inSubscription.unsubscribe();

    //for (let v of [new V1, new V0, new V1, new V1, new V1]) outChan.next(v);

    outChan.next(new V0);
    //outChan.next(new V0);

    setTimeout(() => {
        outChan.next(new V0);

        // Stop sending
        outChan.complete();
        outChan.next(new V1); 
        outChan.next(new V1);

    }, 2000);
}

testTopRX();