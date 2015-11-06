'use strict';
function JString() {
    /**
     * @method
     * @name typeChecker
     * @access private
     * @description Throws a TypeError when incoming parameter is not of type string.
     * @param {string} string incoming string.
     */
    let typeChecker = function(string){
        if(typeof string !== `string`){
            throw new TypeError(`First parameter must be a string`);
        }
    };
    this.removeTags = function (string, except) {
        typeChecker(string);
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
        return typeof string === `string` ? str.replace(reg, ``) : false;
    };
    this.cut = function (string, len) {
        typeChecker(string);
        if(typeof len !== `number`){
            throw new TypeError(`First parameter must be a number`);
        }
        return str.substr(0, len);
    };
    this.capitalize = function (str) {
        typeChecker(string);
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    this.toLow = function (string) {
        typeChecker(string);
        return string.toLowerCase();
    };
    this.toUp = function (string) {
        typeChecker(string);
        return string.toUpperCase();
    };
    this.minifyWhitespace = function (string) {
        typeChecker(string);
        return string.replace(/\s{2,}/g, ` `);
    };
    this.replaceAll = function (string, props){
        typeChecker(string);
        let flag = props[2] ? `g`: `gi`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    };
    this.replace = function (string, props){
        typeChecker(string);
        let flag = props[2] ? ``: `i`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    };
    this.forEach = function (string, fn){
        typeChecker(string);
        let i=0,
            length = string.length;
        for(;i<length;i++){
            fn.call(string, string[i], i);
        }
    };
    this.handleString = function (string, task) {
        typeChecker(string);
        if (typeof task === `object`) {
            for (let fun in task) {
                if (task.hasOwnProperty(fun) && typeof this[fun] === `function`) {
                    string = this[fun](string, task[fun]);
                }
            }
            return string;
        }
        return false;
    };

    this.isAlpha = function (string) {
        typeChecker(string);
        return /^[a-zA-Z]*$/.test(string);
    };
    this.isAlphanumeric = function (string) {
        typeChecker(string);
        return /^[a-zA-Z0-9]+$/.test(string);
    };
    this.isEmail = function (string) {
        typeChecker(string);
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(string);
    };
    this.isUpper = function (string, strict) {
        typeChecker(string);
        return strict ? /^[A-Z0-9 _-]+$/.test(string): /[A-Z]+/.test(string);
    };
    this.isLower = function (string, strict) {
        typeChecker(string);
        return strict ? /^[a-z0-9 _-]+$/.test(string): /[a-z]+/.test(string);
    };


}
module.exports = new JString();
