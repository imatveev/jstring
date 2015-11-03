'use strict';
function JString() {
    this.removeTags = function (string, except) {
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
        return typeof len === `number` ? str.substr(0, len) : false;
    };
    this.capitalize = function (str) {
        return typeof string === `string` ? str.charAt(0).toUpperCase() + str.slice(1) : false;
    };
    this.toLow = function (string) {
        return string.toLowerCase();
    };
    this.toUp = function (string) {
        return string.toUpperCase();
    };
    this.minifyWhitespace = function (string) {
        return string.replace(/\s{2,}/g, ` `);
    };
    this.replaceAll = function (string, props){
        let flag = props[2] ? `g`: `gi`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    };
    this.replace = function (string, props){
        let flag = props[2] ? ``: `i`;
        return string.replace(new RegExp(props[0], flag), props[1]);
    };
    this.handleString = function (string, task) {
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
        return /^[a-zA-Z]*$/.test(string);
    };
    this.isAlphanumeric = function (string) {
        return /^[a-zA-Z0-9]+$/.test(string);
    };
    this.isEmail = function (string) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(string);
    };
    this.isUpper = function (string, strict) {
        return strict ? /^[A-Z0-9 _-]+$/.test(string): /[A-Z]+/.test(string);
    };
    this.isLower = function (string, strict) {
        return strict ? /^[a-z0-9 _-]+$/.test(string): /[a-z]+/.test(string);
    };

}
module.exports = new JString();
