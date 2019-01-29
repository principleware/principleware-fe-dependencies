define([
    'polpware-tinymce-tailor/src/util/Observable',
    'polpware-tinymce-tailor/src/util/Tools',
    'polpware-tinymce-tailor/src/util/Arr',
    'polpware-tinymce-tailor/src/util/Promise',
    'polpware-tinymce-tailor/src/util/EventDispatcher',
    'polpware-tinymce-tailor/src/util/Color',
    'polpware-tinymce-tailor/src/util/Fun',
    'polpware-tinymce-tailor/src/util/Uuid',
    'polpware-tinymce-tailor/src/util/Private',
    'polpware-tinymce-tailor/src/util/XHR',
    'polpware-tinymce-tailor/src/util/I18n',
    'polpware-tinymce-tailor/src/util/Class',
    'jquery',
    'meld',
    'when',
    'locache',
    'underscore',
    'constraintjs',
    'data-flow',
    'state-machine',
    'backbone',
    'backbone-paginator'
], function(
    Observable,
    Tools,
    Arr,
    Promise,
    EventDispatcher,
    Color,
    Fun,
    Uuid,
    Private,
    XHR,
    I18n,
    Class,
    $,
    meld,
    when,
    locache,
    _,
    cjs,
    flow,
    stateMachine,
    backbone
) {

    'use strict';

    return {
        Observable: Observable,
        Tools: Tools,
        Arr: Arr,
        Promise: Promise,
        EventDispatcher: EventDispatcher,
        Color: Color,
        Fun: Fun,
        Uuid: Uuid,
        Private: Private,
        JSON: JSON,
        XHR: XHR,
        I18n: I18n,
        Class: Class,
        jquery: $,
        meld: meld,
        when: when,
        locache: locache,
        underscore: _,
        constraintjs: cjs,
        dataflow: flow,
        backbone: backbone,
        statemachine: stateMachine
    };
});

