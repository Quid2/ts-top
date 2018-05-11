/** ZM Type:
ConTree a b ≡   Con {constrName :: a,
                     constrFields :: K6260e465ae74 (Kb8cd13187198 (K7028aa556ebc b))
                                                   (Kb8cd13187198 (Ka5583bf3ad34 a
                                                                                 (K7028aa556ebc b)))}
              | ConTree (↫ a b) (↫ a b)
*/
import * as Q from '../.././lib/core';
import * as K6260e465ae74 from '../Either/K6260e465ae74';
import * as Kb8cd13187198 from '../List/Kb8cd13187198';
import * as K7028aa556ebc from '../Type/K7028aa556ebc';
import * as Ka5583bf3ad34 from '../Tuple2/Ka5583bf3ad34';
export declare const $ConTree: <A extends Q.Flat, B extends Q.Flat>(t0: Q.zmFold<A>, t1: Q.zmFold<B>) => Q.zmFold<ConTree<A, B>>;
export declare const ___: Q.zmTypeInfo;
export declare type ConTree<A extends Q.Flat, B extends Q.Flat> = Con<A, B> | _ConTree<A, B>;
export declare class Con<A extends Q.Flat, B extends Q.Flat> implements Q.Flat {
    constrName: A;
    constrFields: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>;
    constructor(constrName: A, constrFields: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>);
    toString(): string;
    toStr(nested?: boolean): string;
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
    toString(): string;
    toStr(nested?: boolean): string;
    match<R>(m: {
        Con: (v0: A, v1: K6260e465ae74.Either<Kb8cd13187198.List<K7028aa556ebc.Type<B>>, Kb8cd13187198.List<Ka5583bf3ad34.Tuple2<A, K7028aa556ebc.Type<B>>>>) => R;
        ConTree: (v0: ConTree<A, B>, v1: ConTree<A, B>) => R;
    }): R;
    flatMaxSize(): number;
    flatEncode(st: Q.EncoderState): void;
}
