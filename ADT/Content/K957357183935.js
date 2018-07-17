"use strict";
/** ZM Type:
Content a b ≡   TextMessage (Kb8cd13187198 K066db52af145)
              | AskSubSubjects
              | Join
              | Leave
              | Ping
              | AskUsers
              | Users (Kb8cd13187198 a)
              | AskHistory
              | History (Kb8cd13187198 b)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("../.././lib/core");
const Kb8cd13187198 = require("../List/Kb8cd13187198");
const K066db52af145 = require("../Char/K066db52af145");
exports.$Content = function (t1, t2) { return function (f) { return f(exports.___, [t1(f), t2(f)]); }; };
exports.___ = {
    zid: [0x95, 0x73, 0x57, 0x18, 0x39, 0x35],
    decoder: function (decoders) {
        return function (st) { if (st.zero()) {
            if (st.zero()) {
                if (st.zero()) {
                    return new TextMessage(Kb8cd13187198.___.decoder([K066db52af145.___.decoder([])])(st));
                }
                else {
                    return new AskSubSubjects();
                }
            }
            else {
                if (st.zero()) {
                    return new Join();
                }
                else {
                    return new Leave();
                }
            }
        }
        else {
            if (st.zero()) {
                if (st.zero()) {
                    return new Ping();
                }
                else {
                    return new AskUsers();
                }
            }
            else {
                if (st.zero()) {
                    return new Users(Kb8cd13187198.___.decoder([decoders[0]])(st));
                }
                else {
                    if (st.zero()) {
                        return new AskHistory();
                    }
                    else {
                        return new History(Kb8cd13187198.___.decoder([decoders[1]])(st));
                    }
                }
            }
        } };
    }
};
class TextMessage {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["TextMessage", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["TextMessage", this._0.pretty(true)].join(' ')); }
    match(m) { return m.TextMessage(this._0); }
    flatMaxSize() { return 3 + this._0.flatMaxSize(); }
    flatEncode(st) { st.zero(); st.zero(); st.zero(); this._0.flatEncode(st); }
}
exports.TextMessage = TextMessage;
class AskSubSubjects {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "AskSubSubjects"; }
    pretty(nested = false) { return "AskSubSubjects"; }
    match(m) { return m.AskSubSubjects; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.zero(); st.zero(); st.one(); }
}
exports.AskSubSubjects = AskSubSubjects;
class Join {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Join"; }
    pretty(nested = false) { return "Join"; }
    match(m) { return m.Join; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.zero(); st.one(); st.zero(); }
}
exports.Join = Join;
class Leave {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Leave"; }
    pretty(nested = false) { return "Leave"; }
    match(m) { return m.Leave; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.zero(); st.one(); st.one(); }
}
exports.Leave = Leave;
class Ping {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "Ping"; }
    pretty(nested = false) { return "Ping"; }
    match(m) { return m.Ping; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.one(); st.zero(); st.zero(); }
}
exports.Ping = Ping;
class AskUsers {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "AskUsers"; }
    pretty(nested = false) { return "AskUsers"; }
    match(m) { return m.AskUsers; }
    flatMaxSize() { return 3 + 0; }
    flatEncode(st) { st.one(); st.zero(); st.one(); }
}
exports.AskUsers = AskUsers;
class Users {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["Users", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["Users", this._0.pretty(true)].join(' ')); }
    match(m) { return m.Users(this._0); }
    flatMaxSize() { return 3 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.one(); st.zero(); this._0.flatEncode(st); }
}
exports.Users = Users;
class AskHistory {
    toString() { return this.toStr(false); }
    toStr(nested = false) { return "AskHistory"; }
    pretty(nested = false) { return "AskHistory"; }
    match(m) { return m.AskHistory; }
    flatMaxSize() { return 4 + 0; }
    flatEncode(st) { st.one(); st.one(); st.one(); st.zero(); }
}
exports.AskHistory = AskHistory;
class History {
    constructor(_0) {
        this._0 = _0;
    }
    toString() { return this.toStr(false); }
    toStr(nested = false) { return Q.nestedPars(nested, ["History", this._0.toStr(true)].join(' ')); }
    pretty(nested = false) { return Q.nestedPars(nested, ["History", this._0.pretty(true)].join(' ')); }
    match(m) { return m.History(this._0); }
    flatMaxSize() { return 4 + this._0.flatMaxSize(); }
    flatEncode(st) { st.one(); st.one(); st.one(); st.one(); this._0.flatEncode(st); }
}
exports.History = History;
//# sourceMappingURL=K957357183935.js.map