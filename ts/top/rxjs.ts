import { webSocket } from "rxjs/webSocket";
import { Subject } from "rxjs";
import { flat, unflat, Decoder } from "../flat";
import { zmFold } from "../zm";

export function channel<A>(t: zmFold<A>): Subject<A> {
  return webSocket({
    url: "ws://quid2.net:80/ws",
    protocol: "chats",
    binaryType: "arraybuffer",
    deserializer: ({ data }) => data,
  });
}

//const chan = channel().subscribe(console.log);
