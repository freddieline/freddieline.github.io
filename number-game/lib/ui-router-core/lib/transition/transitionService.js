"use strict";
/**
 * @coreapi
 * @module transition
 */ /** for typedoc */
var interface_1 = require("./interface");
var transition_1 = require("./transition");
var hookRegistry_1 = require("./hookRegistry");
var resolve_1 = require("../hooks/resolve");
var views_1 = require("../hooks/views");
var url_1 = require("../hooks/url");
var redirectTo_1 = require("../hooks/redirectTo");
var onEnterExitRetain_1 = require("../hooks/onEnterExitRetain");
var lazyLoad_1 = require("../hooks/lazyLoad");
var transitionEventType_1 = require("./transitionEventType");
var transitionHook_1 = require("./transitionHook");
var predicates_1 = require("../common/predicates");
var common_1 = require("../common/common");
var hof_1 = require("../common/hof");
/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
exports.defaultTransOpts = {
    location: true,
    relative: null,
    inherit: false,
    notify: true,
    reload: false,
    custom: {},
    current: function () { return null; },
    source: "unknown"
};
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 */
var TransitionService = (function () {
    /** @hidden */
    function TransitionService(_router) {
        this._router = _router;
        /** @hidden */
        this._transitionCount = 0;
        /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
        this._eventTypes = [];
        /** @hidden The registered transition hooks */
        this._registeredHooks = {};
        /** @hidden The  paths on a criteria object */
        this._criteriaPaths = {};
        this.$view = _router.viewService;
        this._deregisterHookFns = {};
        this._pluginapi = common_1.createProxyFunctions(hof_1.val(this), {}, hof_1.val(this), [
            '_definePathType',
            '_defineEvent',
            '_getPathTypes',
            '_getEvents',
            'getHooks',
        ]);
        this._defineDefaultPaths();
        this._defineDefaultEvents();
        this._registerDefaultTransitionHooks();
    }
    /**
     * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
     *
     * Registers a transition lifecycle hook, which is invoked during transition construction.
     *
     * This low level hook should only be used by plugins.
     * This can be a useful time for plugins to add resolves or mutate the transition as needed.
     * The Sticky States plugin uses this hook to modify the treechanges.
     *
     * ### Lifecycle
     *
     * `onCreate` hooks are invoked *while a transition is being constructed*.
     *
     * ### Return value
     *
     * The hook's return value is ignored
     *
     * @internalapi
     * @param criteria defines which Transitions the Hook should be invoked for.
     * @param callback the hook function which will be invoked.
     * @param options the registration options
     * @returns a function which deregisters the hook.
     */
    TransitionService.prototype.onCreate = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onBefore = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onStart = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onExit = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onRetain = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onEnter = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onFinish = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onSuccess = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    TransitionService.prototype.onError = function (criteria, callback, options) { return; };
    /** @internalapi */
    TransitionService.prototype.dispose = function (router) {
        delete router.globals.transition;
        common_1.values(this._registeredHooks).forEach(function (hooksArray) { return hooksArray.forEach(function (hook) {
            hook._deregistered = true;
            common_1.removeFrom(hooksArray, hook);
        }); });
    };
    /**
     * Creates a new [[Transition]] object
     *
     * This is a factory function for creating new Transition objects.
     * It is used internally by the [[StateService]] and should generally not be called by application code.
     *
     * @param fromPath the path to the current state (the from state)
     * @param targetState the target state (destination)
     * @returns a Transition
     */
    TransitionService.prototype.create = function (fromPath, targetState) {
        return new transition_1.Transition(fromPath, targetState, this._router);
    };
    /** @hidden */
    TransitionService.prototype._defineDefaultEvents = function () {
        var Phase = interface_1.TransitionHookPhase;
        var TH = transitionHook_1.TransitionHook;
        var paths = this._criteriaPaths;
        this._defineEvent("onCreate", Phase.CREATE, 0, paths.to, false, TH.IGNORE_RESULT, TH.THROW_ERROR, false);
        this._defineEvent("onBefore", Phase.BEFORE, 0, paths.to, false, TH.HANDLE_RESULT);
        this._defineEvent("onStart", Phase.ASYNC, 0, paths.to);
        this._defineEvent("onExit", Phase.ASYNC, 100, paths.exiting, true);
        this._defineEvent("onRetain", Phase.ASYNC, 200, paths.retained);
        this._defineEvent("onEnter", Phase.ASYNC, 300, paths.entering);
        this._defineEvent("onFinish", Phase.ASYNC, 400, paths.to);
        this._defineEvent("onSuccess", Phase.SUCCESS, 0, paths.to, false, TH.IGNORE_RESULT, TH.LOG_ERROR, false);
        this._defineEvent("onError", Phase.ERROR, 0, paths.to, false, TH.IGNORE_RESULT, TH.LOG_ERROR, false);
    };
    /** @hidden */
    TransitionService.prototype._defineDefaultPaths = function () {
        var STATE = interface_1.TransitionHookScope.STATE, TRANSITION = interface_1.TransitionHookScope.TRANSITION;
        this._definePathType("to", TRANSITION);
        this._definePathType("from", TRANSITION);
        this._definePathType("exiting", STATE);
        this._definePathType("retained", STATE);
        this._definePathType("entering", STATE);
    };
    /**
     * Defines a transition hook type and returns a transition hook registration
     * function (which can then be used to register hooks of this type).
     * @internalapi
     */
    TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, rejectIfSuperseded) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = transitionHook_1.TransitionHook.HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = transitionHook_1.TransitionHook.REJECT_ERROR; }
        if (rejectIfSuperseded === void 0) { rejectIfSuperseded = true; }
        var eventType = new transitionEventType_1.TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, rejectIfSuperseded);
        this._eventTypes.push(eventType);
        hookRegistry_1.makeEvent(this, this, eventType);
    };
    ;
    /**
     * @hidden
     * Returns the known event types, such as `onBefore`
     * If a phase argument is provided, returns only events for the given phase.
     */
    TransitionService.prototype._getEvents = function (phase) {
        var transitionHookTypes = predicates_1.isDefined(phase) ?
            this._eventTypes.filter(function (type) { return type.hookPhase === phase; }) :
            this._eventTypes.slice();
        return transitionHookTypes.sort(function (l, r) {
            var cmpByPhase = l.hookPhase - r.hookPhase;
            return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
        });
    };
    /**
     * Adds a Path to be used as a criterion against a TreeChanges path
     *
     * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
     * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
     * Each state in the exiting path is checked against the criteria and returned as part of the match.
     *
     * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
     * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
     * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
     *
     * @internalapi
     */
    TransitionService.prototype._definePathType = function (name, hookScope) {
        this._criteriaPaths[name] = { name: name, scope: hookScope };
    };
    /**
     * Gets a Path definition used as a criterion against a TreeChanges path
     *
     * @internalapi
     */
    TransitionService.prototype._getPathTypes = function () {
        return this._criteriaPaths;
    };
    /** @hidden */
    TransitionService.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    /** @hidden */
    TransitionService.prototype._registerDefaultTransitionHooks = function () {
        var fns = this._deregisterHookFns;
        // Wire up redirectTo hook
        fns.redirectTo = redirectTo_1.registerRedirectToHook(this);
        // Wire up onExit/Retain/Enter state hooks
        fns.onExit = onEnterExitRetain_1.registerOnExitHook(this);
        fns.onRetain = onEnterExitRetain_1.registerOnRetainHook(this);
        fns.onEnter = onEnterExitRetain_1.registerOnEnterHook(this);
        // Wire up Resolve hooks
        fns.eagerResolve = resolve_1.registerEagerResolvePath(this);
        fns.lazyResolve = resolve_1.registerLazyResolveState(this);
        // Wire up the View management hooks
        fns.loadViews = views_1.registerLoadEnteringViews(this);
        fns.activateViews = views_1.registerActivateViews(this);
        // After globals.current is updated at priority: 10000
        fns.updateUrl = url_1.registerUpdateUrl(this);
        // Lazy load state trees
        fns.lazyLoad = lazyLoad_1.registerLazyLoadHook(this);
    };
    return TransitionService;
}());
exports.TransitionService = TransitionService;
//# sourceMappingURL=transitionService.js.map