//     jstring
//
//     Copyright (c) 2015 Ivan Matvieiev
//     MIT License - http://opensource.org/licenses/mit-license.php
'use strict';

/**
* @method
* @name stringChecker
* @access private
* @description Throws a TypeError when incoming parameter is not of type string.
* @param {string} string incoming string.
*/
let stringChecker = string => {
    if(typeof string !== `string`){
        throw new TypeError(`First parameter must be a string`);
    }
};

/**
* @method
* @name numberChecker
* @access private
* @description Throws a TypeError when incoming parameter is not of type number.
* @param {number} number incoming number.
*/
let numberChecker = number => {
    if(typeof number !== `number`){
        throw new TypeError(`First parameter must be a number`);
    }
};

const jstring = {
    removeTags(string, except) {
        stringChecker(string);
        if (except && !Array.isArray(except)) {
            throw new TypeError(`Except parameter must be an array`);
        }
        if (except) {
            let closingTag = except.map(function (elem) {
                return `\/${elem}`;
            });
            except = except instanceof Array ? `?!${except.concat(closingTag).join(`|`)}` : `?!${except}|\/${except}`;
        }
        else {
            except = ``;
        }
        let reg = new RegExp(`(<|&lt;)(${except}).*?(>|&gt;)`, `g`);
        return typeof string === `string` ? string.replace(reg, ``) : false;
    },
    cut(string, len) {
        stringChecker(string);
        numberChecker(len);
        return string.substr(0, len);
    },
    capitalize(string) {
        stringChecker(string);
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toLow(string) {
        stringChecker(string);
        return string.toLowerCase();
    },
    toUp(string) {
        stringChecker(string);
        return string.toUpperCase();
    },
    minifyWhitespace(string) {
        stringChecker(string);
        return string.replace(/\s{2,}/g, ` `);
    },
    replaceAll(string, props){
        stringChecker(string);
        let flag = props[2] ? `g`: `gi`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    },
    replace(string, props){
        stringChecker(string);
        let flag = props[2] ? ``: `i`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    },
    left(string, len){
        stringChecker(string);
        numberChecker(len);
        return string.substr(0, len);
    },
    right(string, len){
        stringChecker(string);
        numberChecker(len);
        return string.substr(string.length-len);
    },
    forEach(string, fn){
        stringChecker(string);
        let i=0,
            length = string.length;
        for(;i<length;i++){
            fn.call(string, string[i], i);
        }
    },
    repeat(string, n){
        stringChecker(string);
        numberChecker(n);
        let result = string;
        for(let i=1; i<n; i++){
            result+=string;
        }
        return result;
    },
    handleString(string, task) {
        stringChecker(string);
        if (typeof task === `object`) {
            for (let fun in task) {
                if (task.hasOwnProperty(fun) && typeof this[fun] === `function`) {
                    string = this[fun](string, task[fun]);
                }
            }
            return string;
        }
        return false;
    },
    isAlpha(string) {
        stringChecker(string);
        return /^[a-zA-Z]*$/.test(string);
    },
    isAlphanumeric(string) {
        stringChecker(string);
        return /^[a-zA-Z0-9]+$/.test(string);
    },
    isEmail(string) {
        stringChecker(string);
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(string);
    },
    isUpper(string, strict) {
        stringChecker(string);
        return strict ? /^[A-Z0-9 _-]+$/.test(string): /[A-Z]+/.test(string);
    },
    isLower(string, strict) {
        stringChecker(string);
        return strict ? /^[a-z0-9 _-]+$/.test(string): /[a-z]+/.test(string);
    },
};
module.exports = jstring;
