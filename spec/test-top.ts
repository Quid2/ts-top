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
    const received: Array<[string]> = [];
    function log(n:string,v:Bit) : void {received.push([n+":"+v.toString()])}

    const [inChan, outChan ] = channel($Bit);

    var inSubscription = inChan.subscribe({
        next: x => log("1.1",x),
        error: err => console.error('inChan:error', err),
        complete: () => console.log('inChan:complete'),
    });

    var inSubscription2 = inChan.subscribe({
        next: x => log("1.2",x),
        error: err => console.error('inChan:error', err),
        complete: () => console.log('inChan:complete'),
    });

    const [inChan2,outChan2] = channel($Bit);    
    inChan2.subscribe({
        next: x => log("2.1",x),
        error: err => console.error('inChan:error', err),
        complete: () => console.log('inChan:complete'),
    });

    // close connection
    //inSubscription.unsubscribe();

    //for (let v of [new V1, new V0, new V1, new V1, new V1]) outChan.next(v);

    setTimeout(() => {
        outChan.next(new V0);

        outChan2.next(new V1);
    
            // outChan.next(new V0);
    
            // // Stop sending
            // outChan.complete();
            // outChan.next(new V1); 
            // outChan.next(new V1);
    
        }, 2000);

    setTimeout(() => {
        console.log("Received",received.toString(),received.toString()=="2.1:V0,1.1:V1,1.2:V1")
        //[["2.1", new V0],["1.1",new V1],["1.2", new V1]],new V0 == new V0,"1.1"=="1.1");
        //console.log(received.toString(),received.join(","),JSON.stringify(received),JSON.stringify(new V1),(new V1));
    }, 3000);
}

testTopRX();