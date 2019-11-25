const Polyglot = require('polyglot');

; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
            ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
            : typeof global !== 'undefined' ? global
                : this
), function (global) {
    // 'use strict';
    let data = cc.sys.language === 'zh' ? require('zh') : require('en');
    // let polyglot = null;
    let polyglot = new Polyglot({ phrases: data, allowMissing: true });
    let lang = "";

    /**
     * This method allow you to switch language during runtime, language argument should be the same as your data file name
     * such as when language is 'zh', it will load your 'zh.js' data source.
     * @method init
     * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
     */
    let init = function (language) {
        _i18n.lang = language;
        data = language === 'zh' ? require('zh') : require('en');
        polyglot.replace(data);
    }

    /**
     * this method takes a text key as input, and return the localized string
     * Please read https://github.com/airbnb/polyglot.js for details
     * @method t
     * @return {String} localized string
     * @example
     *
     * var myText = i18n.t('MY_TEXT_KEY');
     *
     * // if your data source is defined as
     * // {"hello_name": "Hello, %{name}"}
     * // you can use the following to interpolate the text
     * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
     */
    let t = function (key, opt) {
        return polyglot.t(key, opt);
    }

    global.i18n = {
        lang: lang,
        init: init,
        t: t
    };

    var _i18n = global.i18n;

    module.exports.i18n = global.i18n;

    return global.i18n;
}));