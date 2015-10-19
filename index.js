'use strict';
function JString() {
    this.removeTags = function (str, except) {
        if(except){
            if(except instanceof Array){
                let closingTag = except.map(function(elem){
                    return `\/${elem}`;
                });
                except = `?!${except.concat(closingTag).join(`|`)}`;
            }
            else{
                except = `?!${except}|\/${except}`;
            }
        }
        else{
            except = ``;
        }
        let reg = new RegExp(`(<|&lt;)(${except}).*?(>|&gt;)`, `g`);
        return typeof str === `string` ? str.replace(reg, ``) : false;
    };
    this.cut = function (str, len) {
        return typeof len === `number` ? str.substr(0, len) : false;
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
}
module.exports = new JString();