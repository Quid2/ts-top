//import { tap } from "tap";
import { $List, Cons, Nil } from '../ADT/List/Kb8cd13187198'
import { Bit, V0, V1, $Bit } from '../ADT/Bit/K65149ce3b366'

export function test() {
    const l0 = new Nil;
    const l1 = new Cons(new V0, new Cons(new V1, new Nil))

    //console.log("Array",Array.from(l1))

    //console.log(l0.toString(), l0.length())

    // BAD
    console.log(l1)
    //l1._0 = new V1
    console.log(l1)

    //for (var n0 of l0) console.log(n0)

    //console.log(l1.toString(),l1.length())
    //for (var n1 of l1) console.log(n1)

    //const s1 = new String (new Cons(new Char('A'),new Cons(new Char("B"),new Nil)))
    //console.log(s1.toString())
}

test();