import * as Q from '../../core';
import * as K6260e465ae74 from '../Either/K6260e465ae74';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K7028aa556ebc from '../Type/K7028aa556ebc';
import * as Ka5583bf3ad34 from '../Tuple2/Ka5583bf3ad34';
export declare const $ConTree: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<ConTree<A, B>>;
export declare type ConTree<A extends Q.Flat, B extends Q.Flat> = Con<A, B> | _ConTree<A, B>;
export declare class Con<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    constrName: A;
    constrFields: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>;
    constructor(constrName: A, constrFields: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>);
    match<R>(m: {
        Con: (v0: A, v1: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>) => R;
        ConTree: (v0: ConTree<A, B>, v1: ConTree<A, B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
export declare class _ConTree<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    _0: ConTree<A, B>;
    _1: ConTree<A, B>;
    constructor(_0: ConTree<A, B>, _1: ConTree<A, B>);
    match<R>(m: {
        Con: (v0: A, v1: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>) => R;
        ConTree: (v0: ConTree<A, B>, v1: ConTree<A, B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}