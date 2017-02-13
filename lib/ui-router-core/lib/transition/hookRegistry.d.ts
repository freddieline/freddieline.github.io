import { IHookRegistry } from "./interface";
import { HookRegOptions, HookMatchCriteria, TreeChanges, HookMatchCriterion, IMatchingNodes, HookFn } from "./interface";
import { State } from "../state/stateObject";
import { TransitionEventType } from "./transitionEventType";
import { TransitionService } from "./transitionService";
/**
 * Determines if the given state matches the matchCriteria
 *
 * @hidden
 *
 * @param state a State Object to test against
 * @param criterion
 * - If a string, matchState uses the string as a glob-matcher against the state name
 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
 *   and returns a positive match if any of the globs match.
 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
 * @returns {boolean}
 */
export declare function matchState(state: State, criterion: HookMatchCriterion): boolean;
/**
 * @hidden
 * The registration data for a registered transition hook
 */
export declare class RegisteredHook {
    tranSvc: TransitionService;
    eventType: TransitionEventType;
    callback: HookFn;
    matchCriteria: HookMatchCriteria;
    priority: number;
    bind: any;
    _deregistered: boolean;
    constructor(tranSvc: TransitionService, eventType: TransitionEventType, callback: HookFn, matchCriteria: HookMatchCriteria, options?: HookRegOptions);
    /**
     * Given an array of PathNodes, and a HookMatchCriteria, returns an array containing
     * the PathNodes that the criteria matches, or null if there were no matching nodes.
     *
     * Returning null is significant to distinguish between the default
     * "match-all criterion value" of `true` compared to a () => true,
     * when the nodes is an empty array.
     *
     * This is useful to allow a transition match criteria of `entering: true`
     * to still match a transition, even when `entering === []`.  Contrast that
     * with `entering: (state) => true` which only matches when a state is actually
     * being entered.
     */
    private _matchingNodes(nodes, criterion);
    /**
     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
     *
     * { to: true, from: true, entering: true, exiting: true, retained: true }
     */
    private _getDefaultMatchCriteria();
    /**
     * Create a IMatchingNodes object from the TransitionHookTypes that basically looks like this:
     *
     * let matches: IMatchingNodes = {
     *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
     *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
     *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
     *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
     *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
     * };
     */
    private _getMatchingNodes(treeChanges);
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    matches(treeChanges: TreeChanges): IMatchingNodes;
}
/** @hidden Return a registration function of the requested type. */
export declare function makeEvent(registry: IHookRegistry, transitionService: TransitionService, eventType: TransitionEventType): (matchObject: any, callback: any, options?: {}) => () => void;
