import { State } from "../state/stateObject";
export declare const fromJson: any;
export declare const toJson: any;
export declare const copy: any;
export declare const forEach: any;
export declare const extend: any;
export declare const equals: any;
export declare const identity: (x: any) => any;
export declare const noop: () => any;
export declare type Mapper<X, T> = (x: X, key?: (string | number)) => T;
export interface TypedMap<T> {
    [key: string]: T;
}
export declare type Predicate<X> = (x?: X) => boolean;
export declare type IInjectable = (Function | any[]);
export interface Obj extends Object {
    [key: string]: any;
}
/**
 * Builds proxy functions on the `to` object which pass through to the `from` object.
 *
 * For each key in `fnNames`, creates a proxy function on the `to` object.
 * The proxy function calls the real function on the `from` object.
 *
 *
 * #### Example:
 * This example creates an new class instance whose functions are prebound to the new'd object.
 * ```js
 * class Foo {
 *   constructor(data) {
 *     // Binds all functions from Foo.prototype to 'this',
 *     // then copies them to 'this'
 *     bindFunctions(Foo.prototype, this, this);
 *     this.data = data;
 *   }
 *
 *   log() {
 *     console.log(this.data);
 *   }
 * }
 *
 * let myFoo = new Foo([1,2,3]);
 * var logit = myFoo.log;
 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
 * ```
 *
 * #### Example:
 * This example creates a bound version of a service function, and copies it to another object
 * ```
 *
 * var SomeService = {
 *   this.data = [3, 4, 5];
 *   this.log = function() {
 *     console.log(this.data);
 *   }
 * }
 *
 * // Constructor fn
 * function OtherThing() {
 *   // Binds all functions from SomeService to SomeService,
 *   // then copies them to 'this'
 *   bindFunctions(SomeService, this, SomeService);
 * }
 *
 * let myOtherThing = new OtherThing();
 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
 * ```
 *
 * @param source A function that returns the source object which contains the original functions to be bound
 * @param target A function that returns the target object which will receive the bound functions
 * @param bind A function that returns the object which the functions will be bound to
 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
 */
export declare function createProxyFunctions(source: Function, target: Obj, bind: Function, fnNames?: string[], latebind?: boolean): Obj;
/**
 * prototypal inheritance helper.
 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
 */
export declare const inherit: (parent: Obj, extra: Obj) => any;
/** Given an array, returns true if the object is found in the array, (using indexOf) */
export declare const inArray: typeof _inArray;
export declare function _inArray(array: any[], obj: any): boolean;
export declare function _inArray(array: any[]): (obj: any) => boolean;
/**
 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
 * The same array is returned
 */
export declare const removeFrom: typeof _removeFrom;
export declare function _removeFrom<T>(array: T[], obj: T): T[];
export declare function _removeFrom<T>(array: T[]): (obj: T) => T[];
/** pushes a values to an array and returns the value */
export declare const pushTo: typeof _pushTo;
export declare function _pushTo<T>(arr: T[], val: T): T;
export declare function _pushTo<T>(arr: T[]): (val: T) => T;
/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
export declare const deregAll: (functions: Function[]) => void;
/**
 * Applies a set of defaults to an options object.  The options object is filtered
 * to only those properties of the objects in the defaultsList.
 * Earlier objects in the defaultsList take precedence when applying defaults.
 */
export declare function defaults(opts?: {}, ...defaultsList: Obj[]): any;
/**
 * Merges properties from the list of objects to the destination object.
 * If a property already exists in the destination object, then it is not overwritten.
 */
export declare function merge(dst: Obj, ...objs: Obj[]): Obj;
/** Reduce function that merges each element of the list into a single object, using extend */
export declare const mergeR: (memo: Obj, item: Obj) => any;
/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
export declare function ancestors(first: State, second: State): State[];
/**
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the whitelisted property names
 */
export declare function pick(obj: Obj, propNames: string[]): Obj;
/**
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, 'a', 'b'); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames 1..n strings, which are the whitelisted property names
 */
export declare function pick(obj: Obj, ...propNames: string[]): Obj;
/**
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, ['a', 'b']); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the blacklisted property names
 */
export declare function omit(obj: Obj, propNames: string[]): Obj;
/**
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, 'a', 'b'); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames 1..n strings, which are the blacklisted property names
 */
export declare function omit(obj: Obj, ...propNames: string[]): Obj;
/** Given an array of objects, maps each element to a named property of the element. */
export declare function pluck(collection: Obj[], propName: string): Obj[];
/** Given an object, maps each property of the object to a named property of the property. */
export declare function pluck(collection: {
    [key: string]: any;
}, propName: string): {
    [key: string]: any;
};
/** Given an array of objects, returns a new array containing only the elements which passed the callback predicate */
export declare function filter<T>(collection: T[], callback: (t: T, key?: number) => boolean): T[];
/** Given an object, returns a new object with only those properties that passed the callback predicate */
export declare function filter<T>(collection: TypedMap<T>, callback: (t: T, key?: string) => boolean): TypedMap<T>;
/** Given an object, return the first property of that object which passed the callback predicate */
export declare function find<T>(collection: TypedMap<T>, callback: Predicate<T>): T;
/** Given an array of objects, returns the first object which passed the callback predicate */
export declare function find<T>(collection: T[], callback: Predicate<T>): T;
/** Given an object, returns a new object, where each property is transformed by the callback function */
export declare let mapObj: <T, U>(collection: {
    [key: string]: T;
}, callback: Mapper<T, U>) => {
    [key: string]: U;
};
/** Given an array, returns a new array, where each element is transformed by the callback function */
export declare function map<T, U>(collection: T[], callback: Mapper<T, U>): U[];
export declare function map<T, U>(collection: {
    [key: string]: T;
}, callback: Mapper<T, U>): {
    [key: string]: U;
};
/**
 * Given an object, return its enumerable property values
 *
 * @example
 * ```
 *
 * let foo = { a: 1, b: 2, c: 3 }
 * let vals = values(foo); // [ 1, 2, 3 ]
 * ```
 */
export declare const values: (<T>(obj: TypedMap<T>) => T[]);
/**
 * Reduce function that returns true if all of the values are truthy.
 *
 * @example
 * ```
 *
 * let vals = [ 1, true, {}, "hello world"];
 * vals.reduce(allTrueR, true); // true
 *
 * vals.push(0);
 * vals.reduce(allTrueR, true); // false
 * ```
 */
export declare const allTrueR: (memo: boolean, elem: any) => any;
/**
 * Reduce function that returns true if any of the values are truthy.
 *
 *  * @example
 * ```
 *
 * let vals = [ 0, null, undefined ];
 * vals.reduce(anyTrueR, true); // false
 *
 * vals.push("hello world");
 * vals.reduce(anyTrueR, true); // true
 * ```
 */
export declare const anyTrueR: (memo: boolean, elem: any) => any;
/**
 * Reduce function which un-nests a single level of arrays
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
export declare const unnestR: (memo: any[], elem: any[]) => any[];
/**
 * Reduce function which recursively un-nests all arrays
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
export declare const flattenR: (memo: any[], elem: any) => any;
/**
 * Reduce function that pushes an object to an array, then returns the array.
 * Mostly just for [[flattenR]] and [[uniqR]]
 */
export declare function pushR(arr: any[], obj: any): any[];
/** Reduce function that filters out duplicates */
export declare const uniqR: <T>(acc: T[], token: T) => T[];
/**
 * Return a new array with a single level of arrays unnested.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
export declare const unnest: (arr: any[]) => any;
/**
 * Return a completely flattened version of an array.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
export declare const flatten: (arr: any[]) => any;
/**
 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
 * @example
 * ```
 *
 * let isNumber = (obj) => typeof(obj) === 'number';
 * let allNumbers = [ 1, 2, 3, 4, 5 ];
 * allNumbers.filter(assertPredicate(isNumber)); //OK
 *
 * let oneString = [ 1, 2, 3, 4, "5" ];
 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
 * ```
 */
export declare const assertPredicate: <T>(predicate: Predicate<T>, errMsg: (string | Function)) => Predicate<T>;
/**
 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
 * @example
 * ```
 *
 * var data = { foo: 1, bar: 2 };
 *
 * let keys = [ 'foo', 'bar' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // values is [1, 2]
 *
 * let keys = [ 'foo', 'bar', 'baz' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // throws Error("Key not found")
 * ```
 */
export declare const assertMap: <T, U>(mapFn: (t: T) => U, errMsg: (string | Function)) => (t: T) => U;
export declare function assertFn(predicateOrMap: Function, errMsg?: (string | Function)): any;
/**
 * Like _.pairs: Given an object, returns an array of key/value pairs
 *
 * @example
 * ```
 *
 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
 * ```
 */
export declare const pairs: (obj: Obj) => any[][];
/**
 * Given two or more parallel arrays, returns an array of tuples where
 * each tuple is composed of [ a[i], b[i], ... z[i] ]
 *
 * @example
 * ```
 *
 * let foo = [ 0, 2, 4, 6 ];
 * let bar = [ 1, 3, 5, 7 ];
 * let baz = [ 10, 30, 50, 70 ];
 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
 * ```
 */
export declare function arrayTuples(...arrayArgs: any[]): any[];
/**
 * Reduce function which builds an object from an array of [key, value] pairs.
 *
 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
 *
 * Each keyValueTuple should be an array with values [ key: string, value: any ]
 *
 * @example
 * ```
 *
 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
 *
 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 *
 * // Or, more simply:
 * var pairsToObj = pairs.reduce(applyPairs, {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 * ```
 */
export declare function applyPairs(memo: TypedMap<any>, keyValTuple: any[]): TypedMap<any>;
/** Get the last element of an array */
export declare function tail<T>(arr: T[]): T;
export declare type sortfn = (a, b) => number;
/**
 * Create a sort function
 *
 * Creates a sort function which sorts by a numeric property.
 *
 * The `propFn` should return the property as a number which can be sorted.
 *
 * #### Example:
 * This example returns the `priority` prop.
 * ```js
 * var sortfn = sortBy(obj => obj.priority)
 * // equivalent to:
 * var longhandSortFn = (a, b) => a.priority - b.priority;
 * ```
 *
 * #### Example:
 * This example uses [[prop]]
 * ```js
 * var sortfn = sortBy(prop('priority'))
 * ```
 *
 * The `checkFn` can be used to exclude objects from sorting.
 *
 * #### Example:
 * This example only sorts objects with type === 'FOO'
 * ```js
 * var sortfn = sortBy(prop('priority'), propEq('type', 'FOO'))
 * ```
 *
 * @param propFn a function that returns the property (as a number)
 * @param checkFn a predicate
 *
 * @return a sort function like: `(a, b) => (checkFn(a) && checkFn(b)) ? propFn(a) - propFn(b) : 0`
 */
export declare const sortBy: (propFn: (a: any) => number, checkFn?: Predicate<any>) => (a: any, b: any) => number;
/**
 * Composes a list of sort functions
 *
 * Creates a sort function composed of multiple sort functions.
 * Each sort function is invoked in series.
 * The first sort function to return non-zero "wins".
 *
 * @param sortFns list of sort functions
 */
export declare const composeSort: (...sortFns: sortfn[]) => sortfn;
export declare const silenceUncaughtInPromise: (promise: Promise<any>) => Promise<any>;
export declare const silentRejection: (error: any) => Promise<any>;
