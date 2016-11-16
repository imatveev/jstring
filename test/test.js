'use strict';

const jstring = require('../');
const assert = require('assert');

describe('string rules', () => {
    it('Should capitalize string', () => {
        assert.equal(jstring.capitalize('jstring'), 'Jstring');
    });
    it('Should capitalize string', () => {
        assert.equal(jstring.capitalize('Jstring'), 'Jstring');
    });
    it('Should remove tags', () => {
        assert.equal(jstring.removeTags('Jstring<tag>'), 'Jstring');
    });
    it('Should remove tags with exception', () => {
        assert.equal(jstring.removeTags('Jstring<tag><foo>', ['foo']), 'Jstring<foo>');
    });
});
