// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zmConst(v) { return function (f) { return v; }; }
exports.zmConst = zmConst;
function flatDecoder(t, decoders) {
    return t.decoder(decoders);
}
exports.flatDecoder = flatDecoder;
;
var DecoderState = (function () {
    function DecoderState(buffer) {
        this.buffer = buffer;
        this.currPtr = 0;
        this.usedBits = 0;
    }
    DecoderState.prototype.byteArray = function () {
        if (this.usedBits != 0)
            throw Error("DecoderState.byteArray: Buffer is not byte aligned");
        var st = this;
        var arrPtr = st.currPtr;
        var arrSize = 0;
        var blkLen;
        st.ensureBytes(1);
        while (blkLen = st.buffer[st.currPtr++]) {
            st.ensureBytes(blkLen + 1);
            st.buffer.copyWithin(st.currPtr - 1, st.currPtr, st.currPtr + blkLen);
            st.currPtr += blkLen;
            arrSize += blkLen;
        }
        return st.buffer.subarray(arrPtr, arrPtr + arrSize);
    };
    DecoderState.prototype.filler = function () {
        while (this.zero())
            ;
    };
    DecoderState.prototype.bits8 = function (numBits) {
        if (numBits < 0 || numBits > 8)
            throw Error("Decoder.bits8: incorrect value of numBits " + numBits);
        this.ensureBits(numBits);
        var unusedBits = 8 - this.usedBits;
        var leadingZeros = 8 - numBits;
        var r = (this.buffer[this.currPtr] << this.usedBits) >>> leadingZeros;
        if (numBits > unusedBits) {
            r &= (this.buffer[this.currPtr + 1] >>> (unusedBits + leadingZeros));
        }
        this.dropBits(numBits);
        return r;
    };
    DecoderState.prototype.zero = function () {
        this.ensureBit();
        var b = !(this.buffer[this.currPtr] & (128 >>> this.usedBits));
        if (this.usedBits == 7) {
            this.currPtr++;
            this.usedBits = 0;
        }
        else
            this.usedBits++;
        return b;
    };
    DecoderState.prototype.ensureBit = function () {
        if (this.currPtr >= this.buffer.byteLength) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.ensureBits = function (requiredBits) {
        if (requiredBits > this.availableBits()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.ensureBytes = function (requiredBytes) {
        if (requiredBytes > this.availableBytes()) {
            throw Error("DecoderState: Not enough data available: " + JSON.stringify(this));
        }
        ;
    };
    DecoderState.prototype.availableBits = function () { return 8 * this.availableBytes() - this.usedBits; };
    DecoderState.prototype.availableBytes = function () { return this.buffer.byteLength - this.currPtr; };
    DecoderState.prototype.dropBits = function (numBits) {
        var totUsed = numBits + this.usedBits;
        this.usedBits = totUsed % 8;
        this.currPtr += Math.floor(totUsed / 8);
    };
    DecoderState.prototype.seal = function () {
        if (this.availableBits() > 0) {
            throw Error("DecoderState: Unread data: " + JSON.stringify(this));
        }
        ;
    };
    return DecoderState;
}());
exports.DecoderState = DecoderState;
var EncoderState = (function () {
    function EncoderState(bufferSize) {
        this.buffer = new Uint8Array(bufferSize);
        this.nextPtr = 0;
        this.currentByte = 0;
        this.usedBits = 0;
    }
    EncoderState.prototype.filler = function () {
        this.currentByte |= 1;
        this.nextWord();
    };
    EncoderState.prototype.bits = function (numBits, value) {
        this.usedBits += numBits;
        var unusedBits = 8 - this.usedBits;
        if (unusedBits > 0)
            this.currentByte |= value << unusedBits;
        else if (unusedBits == 0) {
            this.currentByte |= value;
            this.nextWord();
        }
        else {
            var used = -unusedBits;
            this.currentByte |= value >>> used;
            this.nextWord();
            this.currentByte = value << (8 - used);
            this.usedBits = used;
        }
        ;
    };
    EncoderState.prototype.zero = function () { this.usedBits == 7 ? this.nextWord() : this.usedBits++; };
    EncoderState.prototype.one = function () {
        if (this.usedBits == 7) {
            this.currentByte |= 1;
            this.nextWord();
        }
        else {
            this.currentByte |= (1 << 7 - this.usedBits);
            this.usedBits++;
        }
    };
    EncoderState.prototype.byteArray = function (arr) {
        if (this.usedBits != 0)
            throw Error("EncoderState.byteArray: Buffer is not byte aligned");
        var st = this;
        function writeBlk(srcPtr) {
            var srcLen = arr.byteLength - srcPtr;
            var blkLen = Math.min(srcLen, 255);
            st.buffer[st.nextPtr++] = blkLen;
            if (blkLen == 0)
                return;
            st.buffer.set(arr.subarray(srcPtr, srcPtr + blkLen), st.nextPtr);
            st.nextPtr += blkLen;
            srcPtr += blkLen;
            writeBlk(srcPtr);
        }
        writeBlk(0);
    };
    EncoderState.prototype.nextWord = function () { this.buffer[this.nextPtr++] = this.currentByte; this.currentByte = 0, this.usedBits = 0; };
    EncoderState.prototype.seal = function () {
        if (this.usedBits != 0) {
            throw Error("EncoderState.seal: Byte partially filled: " + JSON.stringify(this));
        }
        ;
        return this.buffer.subarray(0, this.nextPtr);
    };
    return EncoderState;
}());
exports.EncoderState = EncoderState;
function byteArraySize(arr) {
    var numBytes = arr.byteLength + arrayBlocks(arr.byteLength);
    return 8 * numBytes;
}
exports.byteArraySize = byteArraySize;
function arrayBlocks(len) { return Math.ceil(len / 255) + 1; }
exports.arrayBlocks = arrayBlocks;

},{}],16:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Tuple2 = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0xa5, 0x58, 0x3b, 0xf3, 0xad, 0x34],
    decoder: function (decoders) {
        return function (st) { return new Tuple2(decoders[0](st), decoders[1](st)); };
    }
};
var Tuple2 = (function () {
    function Tuple2(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Tuple2.prototype.match = function (m) { return m.Tuple2(this._0, this._1); };
    Tuple2.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Tuple2.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return Tuple2;
}());
exports.Tuple2 = Tuple2;

},{}],23:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Filler = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xae, 0x1d, 0xfe, 0xec, 0xe1, 0x89],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new FillerEnd(); };
    }
};
var FillerBit = (function () {
    function FillerBit(_0) {
        this._0 = _0;
    }
    FillerBit.prototype.flatMaxSize = function () { return 8; };
    FillerBit.prototype.flatEncode = function (st) { st.filler(); };
    return FillerBit;
}());
exports.FillerBit = FillerBit;
var FillerEnd = (function () {
    function FillerEnd() {
    }
    FillerEnd.prototype.flatMaxSize = function () { return 8; };
    FillerEnd.prototype.flatEncode = function (st) { st.filler(); };
    return FillerEnd;
}());
exports.FillerEnd = FillerEnd;

},{}],17:[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../../core/Filler"));

},{"../../core/Filler":23}],18:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Type = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x70, 0x28, 0xaa, 0x55, 0x6e, 0xbc],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new TypeCon(decoders[0](st));
        }
        else {
            return new TypeApp(exports.___.decoder([decoders[0]])(st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
var TypeCon = (function () {
    function TypeCon(_0) {
        this._0 = _0;
    }
    TypeCon.prototype.match = function (m) { return m.TypeCon(this._0); };
    TypeCon.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    TypeCon.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return TypeCon;
}());
exports.TypeCon = TypeCon;
var TypeApp = (function () {
    function TypeApp(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    TypeApp.prototype.match = function (m) { return m.TypeApp(this._0, this._1); };
    TypeApp.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    TypeApp.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return TypeApp;
}());
exports.TypeApp = TypeApp;

},{}],28:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word8 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xb1, 0xf4, 0x6a, 0x49, 0xc8, 0xf8],
    decoder: function (decoders) {
        return function (st) { return new Word8(st.bits8(8)); };
    }
};
var Word8 = (function () {
    function Word8(value) {
        this.value = value;
    }
    Word8.prototype.flatMaxSize = function () { return 8; };
    Word8.prototype.flatEncode = function (st) { st.bits(8, this.value); };
    return Word8;
}());
exports.Word8 = Word8;

},{}],21:[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../../core/Word8"));

},{"../../core/Word8":28}],20:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$SHAKE128_48 = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x9f, 0x21, 0x47, 0x99, 0x14, 0x9b],
    decoder: function (decoders) {
        return function (st) { return new SHAKE128_48(Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st)); };
    }
};
var SHAKE128_48 = (function () {
    function SHAKE128_48(_0, _1, _2, _3, _4, _5) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
        this._4 = _4;
        this._5 = _5;
    }
    SHAKE128_48.prototype.match = function (m) { return m.SHAKE128_48(this._0, this._1, this._2, this._3, this._4, this._5); };
    SHAKE128_48.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize() + this._4.flatMaxSize() + this._5.flatMaxSize(); };
    SHAKE128_48.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); this._4.flatEncode(st); this._5.flatEncode(st); };
    return SHAKE128_48;
}());
exports.SHAKE128_48 = SHAKE128_48;

},{"../Word8/Kb1f46a49c8f8":21}],35:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Maybe = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xda, 0x68, 0x36, 0x77, 0x8f, 0xd4],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nothing();
        }
        else {
            return new Just(decoders[0](st));
        } };
    }
};
var Nothing = (function () {
    function Nothing() {
    }
    Nothing.prototype.match = function (m) { return m.Nothing; };
    Nothing.prototype.flatMaxSize = function () { return 1 + 0; };
    Nothing.prototype.flatEncode = function (st) { st.zero(); };
    return Nothing;
}());
exports.Nothing = Nothing;
var Just = (function () {
    function Just(_0) {
        this._0 = _0;
    }
    Just.prototype.match = function (m) { return m.Just(this._0); };
    Just.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Just.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Just;
}());
exports.Just = Just;

},{}],43:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Either = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x62, 0x60, 0xe4, 0x65, 0xae, 0x74],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Left(decoders[0](st));
        }
        else {
            return new Right(decoders[1](st));
        } };
    }
};
var Left = (function () {
    function Left(_0) {
        this._0 = _0;
    }
    Left.prototype.match = function (m) { return m.Left(this._0); };
    Left.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Left.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Left;
}());
exports.Left = Left;
var Right = (function () {
    function Right(_0) {
        this._0 = _0;
    }
    Right.prototype.match = function (m) { return m.Right(this._0); };
    Right.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Right.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Right;
}());
exports.Right = Right;

},{}],24:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$List = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xb8, 0xcd, 0x13, 0x18, 0x71, 0x98],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Nil();
        }
        else {
            return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
var Nil = (function () {
    function Nil() {
    }
    Nil.prototype.match = function (m) { return m.Nil; };
    Nil.prototype.flatMaxSize = function () { return 1 + 0; };
    Nil.prototype.flatEncode = function (st) { st.zero(); };
    return Nil;
}());
exports.Nil = Nil;
var Cons = (function () {
    function Cons(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Cons.prototype.match = function (m) { return m.Cons(this._0, this._1); };
    Cons.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Cons.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Cons;
}());
exports.Cons = Cons;

},{}],36:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K6260e465ae74 = require("../Either/K6260e465ae74");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var Ka5583bf3ad34 = require("../Tuple2/Ka5583bf3ad34");
exports.$ConTree = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x86, 0x65, 0x3e, 0x04, 0x00, 0x25],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Con(decoders[0](st), K6260e465ae74.___.decoder([Kb8cd13187198.___.decoder([K7028aa556ebc.___.decoder([decoders[1]])]), Kb8cd13187198.___.decoder([Ka5583bf3ad34.___.decoder([decoders[0], K7028aa556ebc.___.decoder([decoders[1]])])])])(st));
        }
        else {
            return new _ConTree(exports.___.decoder([decoders[0], decoders[1]])(st), exports.___.decoder([decoders[0], decoders[1]])(st));
        } };
    }
};
var Con = (function () {
    function Con(constrName, constrFields) {
        this.constrName = constrName;
        this.constrFields = constrFields;
    }
    Con.prototype.match = function (m) { return m.Con(this.constrName, this.constrFields); };
    Con.prototype.flatMaxSize = function () { return 1 + this.constrName.flatMaxSize() + this.constrFields.flatMaxSize(); };
    Con.prototype.flatEncode = function (st) { st.zero(); this.constrName.flatEncode(st); this.constrFields.flatEncode(st); };
    return Con;
}());
exports.Con = Con;
var _ConTree = (function () {
    function _ConTree(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    _ConTree.prototype.match = function (m) { return m.ConTree(this._0, this._1); };
    _ConTree.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    _ConTree.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return _ConTree;
}());
exports._ConTree = _ConTree;

},{"../Either/K6260e465ae74":43,"../List/Kb8cd13187198":24,"../Type/K7028aa556ebc":18,"../Tuple2/Ka5583bf3ad34":16}],29:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
var Kda6836778fd4 = require("../Maybe/Kda6836778fd4");
var K86653e040025 = require("../ConTree/K86653e040025");
exports.$ADT = function (t1, t2, t3) { return function (f) { return f(exports.___, [t1(f), t2(f), t3(f)]); }; };
exports.___ = {
    zid: [0x3e, 0x82, 0x57, 0x25, 0x5c, 0xbf],
    decoder: function (decoders) {
        return function (st) { return new ADT(decoders[0](st), Kb1f46a49c8f8.___.decoder([])(st), Kda6836778fd4.___.decoder([K86653e040025.___.decoder([decoders[1], decoders[2]])])(st)); };
    }
};
var ADT = (function () {
    function ADT(declName, declNumParameters, declCons) {
        this.declName = declName;
        this.declNumParameters = declNumParameters;
        this.declCons = declCons;
    }
    ADT.prototype.match = function (m) { return m.ADT(this.declName, this.declNumParameters, this.declCons); };
    ADT.prototype.flatMaxSize = function () { return this.declName.flatMaxSize() + this.declNumParameters.flatMaxSize() + this.declCons.flatMaxSize(); };
    ADT.prototype.flatEncode = function (st) { this.declName.flatEncode(st); this.declNumParameters.flatEncode(st); this.declCons.flatEncode(st); };
    return ADT;
}());
exports.ADT = ADT;

},{"../Word8/Kb1f46a49c8f8":21,"../Maybe/Kda6836778fd4":35,"../ConTree/K86653e040025":36}],44:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LeastSignificantFirst = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x20, 0xff, 0xac, 0xc8, 0xf8, 0xc9],
    decoder: function (decoders) {
        return function (st) { return new LeastSignificantFirst(decoders[0](st)); };
    }
};
var LeastSignificantFirst = (function () {
    function LeastSignificantFirst(_0) {
        this._0 = _0;
    }
    LeastSignificantFirst.prototype.match = function (m) { return m.LeastSignificantFirst(this._0); };
    LeastSignificantFirst.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    LeastSignificantFirst.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return LeastSignificantFirst;
}());
exports.LeastSignificantFirst = LeastSignificantFirst;

},{}],39:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NonEmptyList = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xbf, 0x2d, 0x1c, 0x86, 0xeb, 0x20],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Elem(decoders[0](st));
        }
        else {
            return new Cons(decoders[0](st), exports.___.decoder([decoders[0]])(st));
        } };
    }
};
var Elem = (function () {
    function Elem(_0) {
        this._0 = _0;
    }
    Elem.prototype.match = function (m) { return m.Elem(this._0); };
    Elem.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Elem.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Elem;
}());
exports.Elem = Elem;
var Cons = (function () {
    function Cons(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Cons.prototype.match = function (m) { return m.Cons(this._0, this._1); };
    Cons.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Cons.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Cons;
}());
exports.Cons = Cons;

},{}],45:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$MostSignificantFirst = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x74, 0xe2, 0xb3, 0xb8, 0x99, 0x41],
    decoder: function (decoders) {
        return function (st) { return new MostSignificantFirst(decoders[0](st)); };
    }
};
var MostSignificantFirst = (function () {
    function MostSignificantFirst(_0) {
        this._0 = _0;
    }
    MostSignificantFirst.prototype.match = function (m) { return m.MostSignificantFirst(this._0); };
    MostSignificantFirst.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    MostSignificantFirst.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return MostSignificantFirst;
}());
exports.MostSignificantFirst = MostSignificantFirst;

},{}],47:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Word7 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf4, 0xc9, 0x46, 0x33, 0x4a, 0x7e],
    decoder: function (decoders) {
        return function (st) { return new Word7(st.bits8(7)); };
    }
};
var Word7 = (function () {
    function Word7(value) {
        this.value = value;
    }
    Word7.prototype.flatMaxSize = function () { return 7; };
    Word7.prototype.flatEncode = function (st) { st.bits(7, this.value); };
    return Word7;
}());
exports.Word7 = Word7;

},{}],46:[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../../core/Word7"));

},{"../../core/Word7":47}],41:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K20ffacc8f8c9 = require("../LeastSignificantFirst/K20ffacc8f8c9");
var Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
var K74e2b3b89941 = require("../MostSignificantFirst/K74e2b3b89941");
var Kf4c946334a7e = require("../Word7/Kf4c946334a7e");
exports.$Word = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf9, 0x2e, 0x83, 0x39, 0x90, 0x8a],
    decoder: function (decoders) {
        return function (st) { return new Word(K20ffacc8f8c9.___.decoder([Kbf2d1c86eb20.___.decoder([K74e2b3b89941.___.decoder([Kf4c946334a7e.___.decoder([])])])])(st)); };
    }
};
var Word = (function () {
    function Word(_0) {
        this._0 = _0;
    }
    Word.prototype.match = function (m) { return m.Word(this._0); };
    Word.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word;
}());
exports.Word = Word;

},{"../LeastSignificantFirst/K20ffacc8f8c9":44,"../NonEmptyList/Kbf2d1c86eb20":39,"../MostSignificantFirst/K74e2b3b89941":45,"../Word7/Kf4c946334a7e":46}],32:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word32 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x24, 0x12, 0x79, 0x9c, 0x99, 0xf1],
    decoder: function (decoders) {
        return function (st) { return new Word32(Kf92e8339908a.___.decoder([])(st)); };
    }
};
var Word32 = (function () {
    function Word32(_0) {
        this._0 = _0;
    }
    Word32.prototype.match = function (m) { return m.Word32(this._0); };
    Word32.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word32.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word32;
}());
exports.Word32 = Word32;

},{"../Word/Kf92e8339908a":41}],25:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K2412799c99f1 = require("../Word32/K2412799c99f1");
exports.$Char = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x06, 0x6d, 0xb5, 0x2a, 0xf1, 0x45],
    decoder: function (decoders) {
        return function (st) { return new Char(K2412799c99f1.___.decoder([])(st)); };
    }
};
var Char = (function () {
    function Char(_0) {
        this._0 = _0;
    }
    Char.prototype.match = function (m) { return m.Char(this._0); };
    Char.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Char.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Char;
}());
exports.Char = Char;

},{"../Word32/K2412799c99f1":32}],37:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetter = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x38, 0x78, 0xb3, 0x58, 0x0f, 0xc5],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetter(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeLetter = (function () {
    function UnicodeLetter(_0) {
        this._0 = _0;
    }
    UnicodeLetter.prototype.match = function (m) { return m.UnicodeLetter(this._0); };
    UnicodeLetter.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetter.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetter;
}());
exports.UnicodeLetter = UnicodeLetter;

},{"../Char/K066db52af145":25}],38:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeLetterOrNumberOrLine = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x33, 0x44, 0x55, 0x20, 0xc4, 0x5a],
    decoder: function (decoders) {
        return function (st) { return new UnicodeLetterOrNumberOrLine(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeLetterOrNumberOrLine = (function () {
    function UnicodeLetterOrNumberOrLine(_0) {
        this._0 = _0;
    }
    UnicodeLetterOrNumberOrLine.prototype.match = function (m) { return m.UnicodeLetterOrNumberOrLine(this._0); };
    UnicodeLetterOrNumberOrLine.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeLetterOrNumberOrLine.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeLetterOrNumberOrLine;
}());
exports.UnicodeLetterOrNumberOrLine = UnicodeLetterOrNumberOrLine;

},{"../Char/K066db52af145":25}],40:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K066db52af145 = require("../Char/K066db52af145");
exports.$UnicodeSymbol = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x80, 0x10, 0x30, 0xef, 0x54, 0x3c],
    decoder: function (decoders) {
        return function (st) { return new UnicodeSymbol(K066db52af145.___.decoder([])(st)); };
    }
};
var UnicodeSymbol = (function () {
    function UnicodeSymbol(_0) {
        this._0 = _0;
    }
    UnicodeSymbol.prototype.match = function (m) { return m.UnicodeSymbol(this._0); };
    UnicodeSymbol.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    UnicodeSymbol.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return UnicodeSymbol;
}());
exports.UnicodeSymbol = UnicodeSymbol;

},{"../Char/K066db52af145":25}],30:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K3878b3580fc5 = require("../UnicodeLetter/K3878b3580fc5");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K33445520c45a = require("../UnicodeLetterOrNumberOrLine/K33445520c45a");
var Kbf2d1c86eb20 = require("../NonEmptyList/Kbf2d1c86eb20");
var K801030ef543c = require("../UnicodeSymbol/K801030ef543c");
exports.$Identifier = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xdc, 0x26, 0xe9, 0xd9, 0x00, 0x47],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Name(K3878b3580fc5.___.decoder([])(st), Kb8cd13187198.___.decoder([K33445520c45a.___.decoder([])])(st));
        }
        else {
            return new Symbol(Kbf2d1c86eb20.___.decoder([K801030ef543c.___.decoder([])])(st));
        } };
    }
};
var Name = (function () {
    function Name(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    Name.prototype.match = function (m) { return m.Name(this._0, this._1); };
    Name.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize() + this._1.flatMaxSize(); };
    Name.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); this._1.flatEncode(st); };
    return Name;
}());
exports.Name = Name;
var Symbol = (function () {
    function Symbol(_0) {
        this._0 = _0;
    }
    Symbol.prototype.match = function (m) { return m.Symbol(this._0); };
    Symbol.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Symbol.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return Symbol;
}());
exports.Symbol = Symbol;

},{"../UnicodeLetter/K3878b3580fc5":37,"../List/Kb8cd13187198":24,"../UnicodeLetterOrNumberOrLine/K33445520c45a":38,"../NonEmptyList/Kbf2d1c86eb20":39,"../UnicodeSymbol/K801030ef543c":40}],31:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$ADTRef = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x07, 0xb1, 0xb0, 0x45, 0xac, 0x3c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Var(Kb1f46a49c8f8.___.decoder([])(st));
        }
        else {
            if (st.zero()) {
                return new Rec();
            }
            else {
                return new Ext(decoders[0](st));
            }
        } };
    }
};
var Var = (function () {
    function Var(_0) {
        this._0 = _0;
    }
    Var.prototype.match = function (m) { return m.Var(this._0); };
    Var.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    Var.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return Var;
}());
exports.Var = Var;
var Rec = (function () {
    function Rec() {
    }
    Rec.prototype.match = function (m) { return m.Rec; };
    Rec.prototype.flatMaxSize = function () { return 2 + 0; };
    Rec.prototype.flatEncode = function (st) { st.one(); st.zero(); };
    return Rec;
}());
exports.Rec = Rec;
var Ext = (function () {
    function Ext(_0) {
        this._0 = _0;
    }
    Ext.prototype.match = function (m) { return m.Ext(this._0); };
    Ext.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    Ext.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); };
    return Ext;
}());
exports.Ext = Ext;

},{"../Word8/Kb1f46a49c8f8":21}],19:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K9f214799149b = require("../SHAKE128_48/K9f214799149b");
var K3e8257255cbf = require("../ADT/K3e8257255cbf");
var Kdc26e9d90047 = require("../Identifier/Kdc26e9d90047");
var K07b1b045ac3c = require("../ADTRef/K07b1b045ac3c");
exports.$AbsRef = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x4b, 0xbd, 0x38, 0x58, 0x7b, 0x9e],
    decoder: function (decoders) {
        return function (st) { return new AbsRef(K9f214799149b.___.decoder([K3e8257255cbf.___.decoder([Kdc26e9d90047.___.decoder([]), Kdc26e9d90047.___.decoder([]), K07b1b045ac3c.___.decoder([exports.___.decoder([])])])])(st)); };
    }
};
var AbsRef = (function () {
    function AbsRef(_0) {
        this._0 = _0;
    }
    AbsRef.prototype.match = function (m) { return m.AbsRef(this._0); };
    AbsRef.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    AbsRef.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return AbsRef;
}());
exports.AbsRef = AbsRef;

},{"../SHAKE128_48/K9f214799149b":20,"../ADT/K3e8257255cbf":29,"../Identifier/Kdc26e9d90047":30,"../ADTRef/K07b1b045ac3c":31}],5:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
exports.zmId = core_1.zmId;
exports.zmFold = core_1.zmFold;
exports.Decoder = core_1.Decoder;
exports.flatDecoder = core_1.flatDecoder;
exports.Flat = core_1.Flat;
var Ka5583bf3ad34_1 = require("./ADT/Tuple2/Ka5583bf3ad34");
var Kae1dfeece189_1 = require("./ADT/Filler/Kae1dfeece189");
var K7028aa556ebc_1 = require("./ADT/Type/K7028aa556ebc");
var K4bbd38587b9e_1 = require("./ADT/AbsRef/K4bbd38587b9e");
var K9f214799149b_1 = require("./ADT/SHAKE128_48/K9f214799149b");
var Kb1f46a49c8f8_1 = require("./ADT/Word8/Kb1f46a49c8f8");
function flat(v) {
    var val = new Ka5583bf3ad34_1.Tuple2(v, new Kae1dfeece189_1.FillerEnd());
    var numBits = val.flatMaxSize();
    var numBytes = Math.ceil(numBits / 8);
    var st = new core_1.EncoderState(numBytes);
    val.flatEncode(st);
    return st.seal();
}
exports.flat = flat;
function zmType(t, ts) {
    function typeId(v) {
        return new K7028aa556ebc_1.TypeCon(new K4bbd38587b9e_1.AbsRef(new K9f214799149b_1.SHAKE128_48(new Kb1f46a49c8f8_1.Word8(v[0]), new Kb1f46a49c8f8_1.Word8(v[1]), new Kb1f46a49c8f8_1.Word8(v[2]), new Kb1f46a49c8f8_1.Word8(v[3]), new Kb1f46a49c8f8_1.Word8(v[4]), new Kb1f46a49c8f8_1.Word8(v[5]))));
    }
    return ts.reduce(function (f, a) { return new K7028aa556ebc_1.TypeApp(f, a); }, typeId(t.zid));
}
exports.zmType = zmType;
;
function unflat(dec, buf) {
    var st = new core_1.DecoderState(buf);
    var v = dec(st);
    st.filler();
    st.seal();
    return v;
}
exports.unflat = unflat;

},{"./core":7,"./ADT/Tuple2/Ka5583bf3ad34":16,"./ADT/Filler/Kae1dfeece189":17,"./ADT/Type/K7028aa556ebc":18,"./ADT/AbsRef/K4bbd38587b9e":19,"./ADT/SHAKE128_48/K9f214799149b":20,"./ADT/Word8/Kb1f46a49c8f8":21}],8:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ByType = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x87, 0xf0, 0x90, 0xa5, 0x4e, 0xa3],
    decoder: function (decoders) {
        return function (st) { return new ByType(); };
    }
};
var ByType = (function () {
    function ByType() {
    }
    ByType.prototype.match = function (m) { return m.ByType; };
    ByType.prototype.flatMaxSize = function () { return 0; };
    ByType.prototype.flatEncode = function () { };
    return ByType;
}());
exports.ByType = ByType;

},{}],22:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require("../core");
exports.$Bytes = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0xf8, 0x84, 0x43, 0x85, 0xa4, 0x43],
    decoder: function (decoders) {
        return function (st) { st.filler(); return new Bytes(st.byteArray()); };
    }
};
var Bytes = (function () {
    function Bytes(bytes) {
        this.bytes = bytes;
    }
    Bytes.prototype.flatMaxSize = function () {
        return 8 + Q.byteArraySize(this.bytes);
    };
    Bytes.prototype.flatEncode = function (st) { st.filler(); st.byteArray(this.bytes); };
    return Bytes;
}());
exports.Bytes = Bytes;

},{"../core":7}],12:[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../../core/Bytes"));

},{"../../core/Bytes":22}],10:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kf8844385a443 = require("../Bytes/Kf8844385a443");
exports.$BLOB = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xf1, 0x39, 0xd4, 0x75, 0x1f, 0xda],
    decoder: function (decoders) {
        return function (st) { return new BLOB(decoders[0](st), Kf8844385a443.___.decoder([])(st)); };
    }
};
var BLOB = (function () {
    function BLOB(encoding, content) {
        this.encoding = encoding;
        this.content = content;
    }
    BLOB.prototype.match = function (m) { return m.BLOB(this.encoding, this.content); };
    BLOB.prototype.flatMaxSize = function () { return this.encoding.flatMaxSize() + this.content.flatMaxSize(); };
    BLOB.prototype.flatEncode = function (st) { this.encoding.flatEncode(st); this.content.flatEncode(st); };
    return BLOB;
}());
exports.BLOB = BLOB;

},{"../Bytes/Kf8844385a443":12}],11:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$FlatEncoding = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x98, 0x21, 0x48, 0xc0, 0x9d, 0xdb],
    decoder: function (decoders) {
        return function (st) { return new FlatEncoding(); };
    }
};
var FlatEncoding = (function () {
    function FlatEncoding() {
    }
    FlatEncoding.prototype.match = function (m) { return m.FlatEncoding; };
    FlatEncoding.prototype.flatMaxSize = function () { return 0; };
    FlatEncoding.prototype.flatEncode = function () { };
    return FlatEncoding;
}());
exports.FlatEncoding = FlatEncoding;

},{}],9:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K7028aa556ebc = require("../Type/K7028aa556ebc");
var K4bbd38587b9e = require("../AbsRef/K4bbd38587b9e");
var Kf139d4751fda = require("../BLOB/Kf139d4751fda");
var K982148c09ddb = require("../FlatEncoding/K982148c09ddb");
exports.$TypedBLOB = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x61, 0x4e, 0xdd, 0x84, 0xc8, 0xbd],
    decoder: function (decoders) {
        return function (st) { return new TypedBLOB(K7028aa556ebc.___.decoder([K4bbd38587b9e.___.decoder([])])(st), Kf139d4751fda.___.decoder([K982148c09ddb.___.decoder([])])(st)); };
    }
};
var TypedBLOB = (function () {
    function TypedBLOB(_0, _1) {
        this._0 = _0;
        this._1 = _1;
    }
    TypedBLOB.prototype.match = function (m) { return m.TypedBLOB(this._0, this._1); };
    TypedBLOB.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize(); };
    TypedBLOB.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); };
    return TypedBLOB;
}());
exports.TypedBLOB = TypedBLOB;

},{"../Type/K7028aa556ebc":18,"../AbsRef/K4bbd38587b9e":19,"../BLOB/Kf139d4751fda":10,"../FlatEncoding/K982148c09ddb":11}],13:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$ChannelSelectionResult = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xc6, 0x62, 0x7a, 0x31, 0x7d, 0xbc],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new Success();
        }
        else {
            if (st.zero()) {
                return new Failure(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
            }
            else {
                return new RetryAt(decoders[0](st));
            }
        } };
    }
};
var Success = (function () {
    function Success() {
    }
    Success.prototype.match = function (m) { return m.Success; };
    Success.prototype.flatMaxSize = function () { return 1 + 0; };
    Success.prototype.flatEncode = function (st) { st.zero(); };
    return Success;
}());
exports.Success = Success;
var Failure = (function () {
    function Failure(reason) {
        this.reason = reason;
    }
    Failure.prototype.match = function (m) { return m.Failure(this.reason); };
    Failure.prototype.flatMaxSize = function () { return 2 + this.reason.flatMaxSize(); };
    Failure.prototype.flatEncode = function (st) { st.one(); st.zero(); this.reason.flatEncode(st); };
    return Failure;
}());
exports.Failure = Failure;
var RetryAt = (function () {
    function RetryAt(_0) {
        this._0 = _0;
    }
    RetryAt.prototype.match = function (m) { return m.RetryAt(this._0); };
    RetryAt.prototype.flatMaxSize = function () { return 2 + this._0.flatMaxSize(); };
    RetryAt.prototype.flatEncode = function (st) { st.one(); st.one(); this._0.flatEncode(st); };
    return RetryAt;
}());
exports.RetryAt = RetryAt;

},{"../List/Kb8cd13187198":24,"../Char/K066db52af145":25}],26:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bool = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x30, 0x6f, 0x19, 0x81, 0xb4, 0x1c],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new False();
        }
        else {
            return new True();
        } };
    }
};
var False = (function () {
    function False() {
    }
    False.prototype.match = function (m) { return m.False; };
    False.prototype.flatMaxSize = function () { return 1 + 0; };
    False.prototype.flatEncode = function (st) { st.zero(); };
    return False;
}());
exports.False = False;
var True = (function () {
    function True() {
    }
    True.prototype.match = function (m) { return m.True; };
    True.prototype.flatMaxSize = function () { return 1 + 0; };
    True.prototype.flatEncode = function (st) { st.one(); };
    return True;
}());
exports.True = True;

},{}],33:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$HostAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0x64, 0xf9, 0x3d, 0x94, 0xa7, 0x3d],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new IPAddress(decoders[0](st));
        }
        else {
            return new DNSAddress(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
        } };
    }
};
var IPAddress = (function () {
    function IPAddress(_0) {
        this._0 = _0;
    }
    IPAddress.prototype.match = function (m) { return m.IPAddress(this._0); };
    IPAddress.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    IPAddress.prototype.flatEncode = function (st) { st.zero(); this._0.flatEncode(st); };
    return IPAddress;
}());
exports.IPAddress = IPAddress;
var DNSAddress = (function () {
    function DNSAddress(_0) {
        this._0 = _0;
    }
    DNSAddress.prototype.match = function (m) { return m.DNSAddress(this._0); };
    DNSAddress.prototype.flatMaxSize = function () { return 1 + this._0.flatMaxSize(); };
    DNSAddress.prototype.flatEncode = function (st) { st.one(); this._0.flatEncode(st); };
    return DNSAddress;
}());
exports.DNSAddress = DNSAddress;

},{"../List/Kb8cd13187198":24,"../Char/K066db52af145":25}],42:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kf92e8339908a = require("../Word/Kf92e8339908a");
exports.$Word16 = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x29, 0x5e, 0x24, 0xd6, 0x2f, 0xac],
    decoder: function (decoders) {
        return function (st) { return new Word16(Kf92e8339908a.___.decoder([])(st)); };
    }
};
var Word16 = (function () {
    function Word16(_0) {
        this._0 = _0;
    }
    Word16.prototype.match = function (m) { return m.Word16(this._0); };
    Word16.prototype.flatMaxSize = function () { return this._0.flatMaxSize(); };
    Word16.prototype.flatEncode = function (st) { this._0.flatEncode(st); };
    return Word16;
}());
exports.Word16 = Word16;

},{"../Word/Kf92e8339908a":41}],34:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K295e24d62fac = require("../Word16/K295e24d62fac");
exports.$HostPort = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x0a, 0xb5, 0xac, 0x63, 0x03, 0xb9],
    decoder: function (decoders) {
        return function (st) { return new HostPort(K295e24d62fac.___.decoder([])(st)); };
    }
};
var HostPort = (function () {
    function HostPort(port) {
        this.port = port;
    }
    HostPort.prototype.match = function (m) { return m.HostPort(this.port); };
    HostPort.prototype.flatMaxSize = function () { return this.port.flatMaxSize(); };
    HostPort.prototype.flatEncode = function (st) { this.port.flatEncode(st); };
    return HostPort;
}());
exports.HostPort = HostPort;

},{"../Word16/K295e24d62fac":42}],27:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K64f93d94a73d = require("../HostAddress/K64f93d94a73d");
var K0ab5ac6303b9 = require("../HostPort/K0ab5ac6303b9");
exports.$SocketAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xe5, 0xd0, 0x25, 0x71, 0xce, 0x7b],
    decoder: function (decoders) {
        return function (st) { return new SocketAddress(K64f93d94a73d.___.decoder([decoders[0]])(st), K0ab5ac6303b9.___.decoder([])(st)); };
    }
};
var SocketAddress = (function () {
    function SocketAddress(socketAddress, socketPort) {
        this.socketAddress = socketAddress;
        this.socketPort = socketPort;
    }
    SocketAddress.prototype.match = function (m) { return m.SocketAddress(this.socketAddress, this.socketPort); };
    SocketAddress.prototype.flatMaxSize = function () { return this.socketAddress.flatMaxSize() + this.socketPort.flatMaxSize(); };
    SocketAddress.prototype.flatEncode = function (st) { this.socketAddress.flatEncode(st); this.socketPort.flatEncode(st); };
    return SocketAddress;
}());
exports.SocketAddress = SocketAddress;

},{"../HostAddress/K64f93d94a73d":33,"../HostPort/K0ab5ac6303b9":34}],14:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var K306f1981b41c = require("../Bool/K306f1981b41c");
var Ke5d02571ce7b = require("../SocketAddress/Ke5d02571ce7b");
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
exports.$WebSocketAddress = function (t1) { return function (f) { return f(exports.___, [t1(f)]); }; };
exports.___ = {
    zid: [0xc8, 0x02, 0xc6, 0xaa, 0xe1, 0xaf],
    decoder: function (decoders) {
        return function (st) { return new WebSocketAddress(K306f1981b41c.___.decoder([])(st), Ke5d02571ce7b.___.decoder([decoders[0]])(st), Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st)); };
    }
};
var WebSocketAddress = (function () {
    function WebSocketAddress(secure, host, path) {
        this.secure = secure;
        this.host = host;
        this.path = path;
    }
    WebSocketAddress.prototype.match = function (m) { return m.WebSocketAddress(this.secure, this.host, this.path); };
    WebSocketAddress.prototype.flatMaxSize = function () { return this.secure.flatMaxSize() + this.host.flatMaxSize() + this.path.flatMaxSize(); };
    WebSocketAddress.prototype.flatEncode = function (st) { this.secure.flatEncode(st); this.host.flatEncode(st); this.path.flatEncode(st); };
    return WebSocketAddress;
}());
exports.WebSocketAddress = WebSocketAddress;

},{"../Bool/K306f1981b41c":26,"../SocketAddress/Ke5d02571ce7b":27,"../List/Kb8cd13187198":24,"../Char/K066db52af145":25}],15:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb1f46a49c8f8 = require("../Word8/Kb1f46a49c8f8");
exports.$IP4Address = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x6c, 0xb2, 0xee, 0x3a, 0xc4, 0x09],
    decoder: function (decoders) {
        return function (st) { return new IP4Address(Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st), Kb1f46a49c8f8.___.decoder([])(st)); };
    }
};
var IP4Address = (function () {
    function IP4Address(_0, _1, _2, _3) {
        this._0 = _0;
        this._1 = _1;
        this._2 = _2;
        this._3 = _3;
    }
    IP4Address.prototype.match = function (m) { return m.IP4Address(this._0, this._1, this._2, this._3); };
    IP4Address.prototype.flatMaxSize = function () { return this._0.flatMaxSize() + this._1.flatMaxSize() + this._2.flatMaxSize() + this._3.flatMaxSize(); };
    IP4Address.prototype.flatEncode = function (st) { this._0.flatEncode(st); this._1.flatEncode(st); this._2.flatEncode(st); this._3.flatEncode(st); };
    return IP4Address;
}());
exports.IP4Address = IP4Address;

},{"../Word8/Kb1f46a49c8f8":21}],6:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var K87f090a54ea3_1 = require("./ADT/ByType/K87f090a54ea3");
var K614edd84c8bd_1 = require("./ADT/TypedBLOB/K614edd84c8bd");
var Kf139d4751fda_1 = require("./ADT/BLOB/Kf139d4751fda");
var K982148c09ddb_1 = require("./ADT/FlatEncoding/K982148c09ddb");
var Kf8844385a443_1 = require("./ADT/Bytes/Kf8844385a443");
var Kc6627a317dbc_1 = require("./ADT/ChannelSelectionResult/Kc6627a317dbc");
var Kc802c6aae1af_1 = require("./ADT/WebSocketAddress/Kc802c6aae1af");
var K6cb2ee3ac409_1 = require("./ADT/IP4Address/K6cb2ee3ac409");
function flatBLOB(v) {
    return new Kf139d4751fda_1.BLOB(new K982148c09ddb_1.FlatEncoding, new Kf8844385a443_1.Bytes(api_1.flat(v)));
}
exports.flatBLOB = flatBLOB;
function typedBLOB(v, t) {
    return new K614edd84c8bd_1.TypedBLOB(t(api_1.zmType), flatBLOB(v));
}
exports.typedBLOB = typedBLOB;
var Channel = (function () {
    function Channel(t, client) {
        var skt = new WebSocket("ws://quid2.net:80/ws", "chats");
        skt.binaryType = "arraybuffer";
        var dec = t(api_1.flatDecoder);
        var firstTime = true;
        skt.onopen = function (event) {
            skt.send(api_1.flat(typedBLOB(new K87f090a54ea3_1.ByType, K87f090a54ea3_1.$ByType(t))));
        };
        skt.onmessage = function (event) {
            console.log('Channel:message from server ', event.data);
            if (firstTime) {
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

},{"./api":5,"./ADT/ByType/K87f090a54ea3":8,"./ADT/TypedBLOB/K614edd84c8bd":9,"./ADT/BLOB/Kf139d4751fda":10,"./ADT/FlatEncoding/K982148c09ddb":11,"./ADT/Bytes/Kf8844385a443":12,"./ADT/ChannelSelectionResult/Kc6627a317dbc":13,"./ADT/WebSocketAddress/Kc802c6aae1af":14,"./ADT/IP4Address/K6cb2ee3ac409":15}],3:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
exports.Flat = api_1.Flat;
exports.flat = api_1.flat;
exports.zmType = api_1.zmType;
exports.zmId = api_1.zmId;
exports.zmFold = api_1.zmFold;
exports.unflat = api_1.unflat;
exports.flatDecoder = api_1.flatDecoder;
exports.Decoder = api_1.Decoder;
var top_1 = require("./top");
exports.typedBLOB = top_1.typedBLOB;
exports.Channel = top_1.Channel;
exports.Client = top_1.Client;

},{"./api":5,"./top":6}],4:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$Bit = function (f) { return f(exports.___, []); };
exports.___ = {
    zid: [0x65, 0x14, 0x9c, 0xe3, 0xb3, 0x66],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            return new V0();
        }
        else {
            return new V1();
        } };
    }
};
var V0 = (function () {
    function V0() {
    }
    V0.prototype.match = function (m) { return m.V0; };
    V0.prototype.flatMaxSize = function () { return 1 + 0; };
    V0.prototype.flatEncode = function (st) { st.zero(); };
    return V0;
}());
exports.V0 = V0;
var V1 = (function () {
    function V1() {
    }
    V1.prototype.match = function (m) { return m.V1; };
    V1.prototype.flatMaxSize = function () { return 1 + 0; };
    V1.prototype.flatEncode = function (st) { st.one(); };
    return V1;
}());
exports.V1 = V1;

},{}],2:[function(require,module,exports) {
"use strict";

var __values = undefined && undefined.__values || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var K65149ce3b366_1 = require("../ADT/Bit/K65149ce3b366");
function testTop() {
    var chan0 = new index_1.Channel(K65149ce3b366_1.$Bit, {
        onOpen: function onOpen(send, close) {},
        onError: function onError() {
            throw Error("Channel failed");
        },
        onValue: function onValue(v) {
            return console.log("received", v);
        }
    });
    var chan = new index_1.Channel(K65149ce3b366_1.$Bit, {
        onOpen: function onOpen(send, close) {
            try {
                for (var _a = __values([new K65149ce3b366_1.V1(), new K65149ce3b366_1.V0(), new K65149ce3b366_1.V1(), new K65149ce3b366_1.V1(), new K65149ce3b366_1.V1()]), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var v = _b.value;
                    console.log(v);
                    send(v);
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
            close();
            var e_1, _c;
        },
        onError: function onError() {
            throw Error("Channel failed");
        },
        onValue: function onValue(v) {
            return console.log("received", v);
        }
    });
}
exports.testTop = testTop;
testTop();
},{"../index":3,"../ADT/Bit/K65149ce3b366":4}],48:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '50506' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[48,2])
//# sourceMappingURL=/dist/77cd33b063d4920b6f54fb6ba3d377c5.map