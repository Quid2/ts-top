import * as Q from './core';
import { List } from '../ADT/List/Kb8cd13187198';
declare function prettyString<A extends Q.ZM>(l: List<A>): string;
declare function prettyConcat<A extends Q.ZM>(l: List<A>, separator?: string): string;
declare function str(s: string): string;
export { str, prettyConcat, prettyString };
