import * as tap from "tap";
import { parseShake48, parseAbsRef } from "../ts/util";
import { Char } from "../ADT/Char/K066db52af145";
import { UnicodeLetter } from "../ADT/UnicodeLetter/K3878b3580fc5";
import { ADTRef, Var, Rec, Ext } from "../ADT/ADTRef/K07b1b045ac3c";
import { String } from "../ADT/String/K2f006595638c";
import { Type, TypeApp, TypeCon } from "../ADT/Type/K7028aa556ebc";
import { Word8 } from "../ADT/Word8/Kb1f46a49c8f8";
import { AbsRef } from "../ADT/AbsRef/K4bbd38587b9e";
import { Word } from "../ADT/Word/Kf92e8339908a";
//import '../lib/functor'

function test() {
  tap.equal(new UnicodeLetter(new Char("a")).pretty(), "a");
  tap.equal(parseShake48("6cb2ee3ac409").pretty(), "6cb2ee3ac409");
  tap.equal(parseAbsRef("K6cb2ee3ac409").pretty(), "K6cb2ee3ac409");
}

const maybeK = "Kda6836778fd4";
//const maybeRef = parseAbsRef("Kda6836778fd4")
const r1 = new Var(new Word8(1));
const t1: Type<ADTRef<AbsRef>> = new TypeCon(r1);
const t2: TypeCon<ADTRef<AbsRef>> = new TypeCon(new Ext(parseAbsRef(maybeK)));
const t3: TypeCon<ADTRef<AbsRef>> = new TypeCon(new Rec());
const t4: Type<ADTRef<AbsRef>> = new TypeApp(t3, t3);
//const t4 = new TypeApp(new TypeCon(new Word8(0)), new TypeCon(new Word8(0)));
//const t0: Type<ADTRef<AbsRef>> = new TypeApp(t4, t3);

const env = new Array();
env["_"] = "List";
env[maybeK] = "Maybe";

function solve(env, ref: ADTRef<AbsRef>) {
  return ref.match({
    Var: (v) => ref.pretty(),
    Rec: env["_"],
    Ext: (r) => env[r.pretty()],
  });
}

console.log(t3.map((ref) => solve(env, ref)));

console.log(
  new TypeApp(new TypeCon(new String("Maybe")), new TypeCon(new String("a")))
    .map((name) => new String("PRE: " + name.value))
    .pretty()
);

test();
