/**
 * @coreapi
 * @module transition
 */ /** for typedoc */
import { IHookRegistry, TransitionOptions, TransitionHookScope, TransitionHookPhase, TransitionCreateHookFn, HookMatchCriteria, HookRegOptions, PathTypes, PathType, RegisteredHooks, TransitionHookFn, TransitionStateHookFn } from "./interface";
import { Transition } from "./transition";
import { RegisteredHook } from "./hookRegistry";
import { TargetState } from "../state/targetState";
import { PathNode } from "../path/node";
import { ViewService } from "../view/view";
import { UIRouter } from "../router";
import { TransitionEventType } from "./transitionEventType";
import { GetResultHandler, GetErrorHandler } from "./transitionHook";
import { Disposable } from "../interface";
/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
export declare let defaultTransOpts: TransitionOptions;
export interface TransitionServicePluginAPI {
    _definePathType(name: string, hookScope: TransitionHookScope): any;
    _getPathTypes(): PathTypes;
    _defineEvent(name: string, hookPhase: TransitionHookPhase, hookOrder: number, criteriaMatchPath: PathType, reverseSort?: boolean, getResultHandler?: GetResultHandler, getErrorHandler?: GetErrorHandler, rejectIfSuperseded?: boolean): any;
    _getEvents(phase?: TransitionHookPhase): TransitionEventType[];
    getHooks(hookName: string): RegisteredHook[];
}
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 */
export declare class TransitionService implements IHookRegistry, Disposable {
    private _router;
    /** @hidden */
    _transitionCount: number;
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
    onCreate(criteria: HookMatchCriteria, callback: TransitionCreateHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onBefore(criteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onStart(criteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onExit(criteria: HookMatchCriteria, callback: TransitionStateHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onRetain(criteria: HookMatchCriteria, callback: TransitionStateHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onEnter(criteria: HookMatchCriteria, callback: TransitionStateHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onFinish(criteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onSuccess(criteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions): Function;
    /** @inheritdoc */
    onError(criteria: HookMatchCriteria, callback: TransitionHookFn, options?: HookRegOptions): Function;
    /** @hidden */
    $view: ViewService;
    /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
    private _eventTypes;
    /** @hidden The registered transition hooks */
    _registeredHooks: RegisteredHooks;
    /** @hidden The  paths on a criteria object */
    private _criteriaPaths;
    /** @internalapi */
    _pluginapi: TransitionServicePluginAPI;
    /**
     * This object has hook de-registration functions for the built-in hooks.
     * This can be used by third parties libraries that wish to customize the behaviors
     *
     * @hidden
     */
    _deregisterHookFns: {
        redirectTo: Function;
        onExit: Function;
        onRetain: Function;
        onEnter: Function;
        eagerResolve: Function;
        lazyResolve: Function;
        loadViews: Function;
        activateViews: Function;
        updateUrl: Function;
        lazyLoad: Function;
    };
    /** @hidden */
    constructor(_router: UIRouter);
    /** @internalapi */
    dispose(router: UIRouter): void;
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
    create(fromPath: PathNode[], targetState: TargetState): Transition;
    /** @hidden */
    private _defineDefaultEvents();
    /** @hidden */
    private _defineDefaultPaths();
    /**
     * Defines a transition hook type and returns a transition hook registration
     * function (which can then be used to register hooks of this type).
     * @internalapi
     */
    _defineEvent(name: string, hookPhase: TransitionHookPhase, hookOrder: number, criteriaMatchPath: PathType, reverseSort?: boolean, getResultHandler?: GetResultHandler, getErrorHandler?: GetErrorHandler, rejectIfSuperseded?: boolean): void;
    /**
     * @hidden
     * Returns the known event types, such as `onBefore`
     * If a phase argument is provided, returns only events for the given phase.
     */
    private _getEvents(phase?);
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
    private _definePathType(name, hookScope);
    /**
     * Gets a Path definition used as a criterion against a TreeChanges path
     *
     * @internalapi
     */
    private _getPathTypes();
    /** @hidden */
    getHooks(hookName: string): RegisteredHook[];
    /** @hidden */
    private _registerDefaultTransitionHooks();
}
