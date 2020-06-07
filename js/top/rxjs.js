"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = void 0;
const webSocket_1 = require("rxjs/webSocket");
function channel(t) {
    return webSocket_1.webSocket({
        url: "ws://quid2.net:80/ws",
        protocol: "chats",
        binaryType: "arraybuffer",
        deserializer: ({ data }) => data,
    });
}
exports.channel = channel;
//const chan = channel().subscribe(console.log);
//# sourceMappingURL=rxjs.js.map