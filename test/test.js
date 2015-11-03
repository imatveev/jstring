'use strict';
let S = require(`../index.js`);

console.log(S.handleString(`foo bFOOar`, {replaceAll: ['foo', 'DONE!', true]}));