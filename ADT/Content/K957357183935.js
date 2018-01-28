"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kb8cd13187198 = require("../List/Kb8cd13187198");
var K066db52af145 = require("../Char/K066db52af145");
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
var TextMessage = (function () {
    function TextMessage(_0) {
        this._0 = _0;
    }
    TextMessage.prototype.match = function (m) { return m.TextMessage(this._0); };
    TextMessage.prototype.flatMaxSize = function () { return 3 + this._0.flatMaxSize(); };
    TextMessage.prototype.flatEncode = function (st) { st.zero(); st.zero(); st.zero(); this._0.flatEncode(st); };
    return TextMessage;
}());
exports.TextMessage = TextMessage;
var AskSubSubjects = (function () {
    function AskSubSubjects() {
    }
    AskSubSubjects.prototype.match = function (m) { return m.AskSubSubjects; };
    AskSubSubjects.prototype.flatMaxSize = function () { return 3 + 0; };
    AskSubSubjects.prototype.flatEncode = function (st) { st.zero(); st.zero(); st.one(); };
    return AskSubSubjects;
}());
exports.AskSubSubjects = AskSubSubjects;
var Join = (function () {
    function Join() {
    }
    Join.prototype.match = function (m) { return m.Join; };
    Join.prototype.flatMaxSize = function () { return 3 + 0; };
    Join.prototype.flatEncode = function (st) { st.zero(); st.one(); st.zero(); };
    return Join;
}());
exports.Join = Join;
var Leave = (function () {
    function Leave() {
    }
    Leave.prototype.match = function (m) { return m.Leave; };
    Leave.prototype.flatMaxSize = function () { return 3 + 0; };
    Leave.prototype.flatEncode = function (st) { st.zero(); st.one(); st.one(); };
    return Leave;
}());
exports.Leave = Leave;
var Ping = (function () {
    function Ping() {
    }
    Ping.prototype.match = function (m) { return m.Ping; };
    Ping.prototype.flatMaxSize = function () { return 3 + 0; };
    Ping.prototype.flatEncode = function (st) { st.one(); st.zero(); st.zero(); };
    return Ping;
}());
exports.Ping = Ping;
var AskUsers = (function () {
    function AskUsers() {
    }
    AskUsers.prototype.match = function (m) { return m.AskUsers; };
    AskUsers.prototype.flatMaxSize = function () { return 3 + 0; };
    AskUsers.prototype.flatEncode = function (st) { st.one(); st.zero(); st.one(); };
    return AskUsers;
}());
exports.AskUsers = AskUsers;
var Users = (function () {
    function Users(_0) {
        this._0 = _0;
    }
    Users.prototype.match = function (m) { return m.Users(this._0); };
    Users.prototype.flatMaxSize = function () { return 3 + this._0.flatMaxSize(); };
    Users.prototype.flatEncode = function (st) { st.one(); st.one(); st.zero(); this._0.flatEncode(st); };
    return Users;
}());
exports.Users = Users;
var AskHistory = (function () {
    function AskHistory() {
    }
    AskHistory.prototype.match = function (m) { return m.AskHistory; };
    AskHistory.prototype.flatMaxSize = function () { return 4 + 0; };
    AskHistory.prototype.flatEncode = function (st) { st.one(); st.one(); st.one(); st.zero(); };
    return AskHistory;
}());
exports.AskHistory = AskHistory;
var History = (function () {
    function History(_0) {
        this._0 = _0;
    }
    History.prototype.match = function (m) { return m.History(this._0); };
    History.prototype.flatMaxSize = function () { return 4 + this._0.flatMaxSize(); };
    History.prototype.flatEncode = function (st) { st.one(); st.one(); st.one(); st.one(); this._0.flatEncode(st); };
    return History;
}());
exports.History = History;
//# sourceMappingURL=K957357183935.js.map