/**
 * @coreapi
 * @module transition
 */ /** for typedoc */
import { extend, removeFrom, tail, values, identity, map } from "../common/common";
import { isString, isFunction } from "../common/predicates";
import { TransitionHookScope } from "./interface"; // has or is using
import { Glob } from "../common/glob";
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
export function matchState(state, criterion) {
    var toMatch = isString(criterion) ? [criterion] : criterion;
    function matchGlobs(_state) {
        var globStrings = toMatch;
        for (var i = 0; i < globStrings.length; i++) {
            var glob = new Glob(globStrings[i]);
            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                return true;
            }
        }
        return false;
    }
    var matchFn = (isFunction(toMatch) ? toMatch : matchGlobs);
    return !!matchFn(state);
}
/**
 * @hidden
 * The registration data for a registered transition hook
 */
var RegisteredHook = (function () {
    function RegisteredHook(tranSvc, eventType, callback, matchCriteria, options) {
        if (options === void 0) { options = {}; }
        this.tranSvc = tranSvc;
        this.eventType = eventType;
        this.callback = callback;
        this.matchCriteria = matchCriteria;
        this.priority = options.priority || 0;
        this.bind = options.bind || null;
        this._deregistered = false;
    }
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
    RegisteredHook.prototype._matchingNodes = function (nodes, criterion) {
        if (criterion === true)
            return nodes;
        var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
        return matching.length ? matching : null;
    };
    /**
     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
     *
     * { to: true, from: true, entering: true, exiting: true, retained: true }
     */
    RegisteredHook.prototype._getDefaultMatchCriteria = function () {
        return map(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
    };
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
    RegisteredHook.prototype._getMatchingNodes = function (treeChanges) {
        var _this = this;
        var criteria = extend(this._getDefaultMatchCriteria(), this.matchCriteria);
        var paths = values(this.tranSvc._pluginapi._getPathTypes());
        return paths.reduce(function (mn, pathtype) {
            // STATE scope criteria matches against every node in the path.
            // TRANSITION scope criteria matches against only the last node in the path
            var isStateHook = pathtype.scope === TransitionHookScope.STATE;
            var path = treeChanges[pathtype.name] || [];
            var nodes = isStateHook ? path : [tail(path)];
            mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name]);
            return mn;
        }, {});
    };
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    RegisteredHook.prototype.matches = function (treeChanges) {
        var matches = this._getMatchingNodes(treeChanges);
        // Check if all the criteria matched the TreeChanges object
        var allMatched = values(matches).every(identity);
        return allMatched ? matches : null;
    };
    return RegisteredHook;
}());
export { RegisteredHook };
/** @hidden Return a registration function of the requested type. */
export function makeEvent(registry, transitionService, eventType) {
    // Create the object which holds the registered transition hooks.
    var _registeredHooks = registry._registeredHooks = (registry._registeredHooks || {});
    var hooks = _registeredHooks[eventType.name] = [];
    // Create hook registration function on the IHookRegistry for the event
    registry[eventType.name] = hookRegistrationFn;
    function hookRegistrationFn(matchObject, callback, options) {
        if (options === void 0) { options = {}; }
        var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, options);
        hooks.push(registeredHook);
        return function deregisterEventHook() {
            registeredHook._deregistered = true;
            removeFrom(hooks)(registeredHook);
        };
    }
    return hookRegistrationFn;
}
//# sourceMappingURL=hookRegistry.js.map